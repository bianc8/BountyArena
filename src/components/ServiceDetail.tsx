import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import TalentLayerContext from '../context/talentLayer';
import usePaymentsByService from '../hooks/usePaymentsByService';
import useProposalsByService from '../hooks/useProposalsByService';
import useReviewsByService from '../hooks/useReviewsByService';
import ContactButton from '../modules/Messaging/components/ContactButton';
import { ISnapshotProposal, IService, ProposalStatusEnum, ServiceStatusEnum, ISnapshotProposalCreateRequest, ISnapshotCastVoteRequest, IVote } from '../types';
import { renderTokenAmountFromConfig } from '../utils/conversion';
import { formatDate } from '../utils/dates';
import PaymentModal from './Modal/PaymentModal';
import ReviewModal from './Modal/ReviewModal';
import ProposalItem from './ProposalItem';
import ReviewItem from './ReviewItem';
import ServiceStatus from './ServiceStatus';
import Stars from './Stars';
import { useChainId } from '../hooks/useChainId';
import axios from 'axios';
import snapshot from '@snapshot-labs/snapshot.js';
import { useEthersSigner } from '../utils/ethers';
import { providers } from 'ethers'

function ServiceDetail({ service }: { service: IService }) {
  const chainId = useChainId();
  const { account, user } = useContext(TalentLayerContext);
  const { reviews } = useReviewsByService(service.id);
  const proposals = useProposalsByService(service.id);
  const payments = usePaymentsByService(service.id);

  const isBuyer = user?.id === service.buyer.id;
  const isSeller = user?.id === service.seller?.id;
  const hasReviewed = !!reviews.find(review => {
    return review.to.id !== user?.id;
  });
  const userProposal = proposals.find(proposal => {
    return proposal.seller.id === user?.id;
  });

  const validatedProposal = proposals.find(proposal => {
    return proposal.status === ProposalStatusEnum.Validated;
  });
  const signer = useEthersSigner()

  const [snapshotProposal, setSnapshotProposal] = useState<ISnapshotProposal | null>(null);
  const [snapshotVotes, setSnapshotVotes] = useState<IVote[]>([]);
  const [proposalCreated, setProposalCreated] = useState<boolean>(false);
  const [voteCasted, setVoteCasted] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  //
  // SNAPSHOT VARS
  //
  const hub = process.env.NEXT_PUBLIC_SNAPSHOT_HUB_URL_TESTNET;
  const graphqlEndpoint = process.env.NEXT_PUBLIC_SNAPSHOT_HUB_URL_TESTNET + "/graphql";
  const client = new snapshot.Client712(hub);
  const ethersProvider = new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_GOERLI_RPC_URL)
  const snapshotSpace = "cagnazz.eth";
  const bountyTitle = service.description?.title;
  const voteType = "approval";
  // ideally, this is true IFF bounty.deadline < now
  const isBountyExpired = true;
  // this should depend on the snapshot proposal (snapshotProposal.end)
  const isSnapshotExpired = (snapshotProposal?.end || 0) < Math.floor(Date.now() / 1000) || true

  const judges = [
    "0x162A2d9A85544d7EB4bc1DEaD0BcBf3F505b903b",
    "0x92Fb4FC6C86669A6F33E2D5023CDc3cfcA22aB9c",
    "0xE27527c537166e4A8Bc40ED629C19c07279E1DD1"
  ]

  const isJudge = judges.includes(account?.address || "");

  const queryGetProposalByTitle =  (title: string | undefined) => {
    return `
      {
        proposals(
          skip: 0,
          where: {
            space_in: ["${snapshotSpace}"],
            title_contains: "${title}",
          },
          orderBy: "created",
          orderDirection: desc
        ) {
          id
          title
          body
          choices
          start
          end
          snapshot
          state
          author
          created
          scores
          scores_by_strategy
          scores_total
          scores_updated
          plugins
          network
          strategies {
            name
            network
            params
          }
          space {
            id
            name
          }
        }
      }
    `
  }

  const queryGetVotesByProposalId = (proposalId: string) => {
    return `
      {
        votes (
          first: 1000
          where: {
            proposal: "${proposalId}"
          }
        ) {
          id
          voter
          created
          choice
          space {
            id
          }
        }
      }
    `
  }

  const getSnapshotProposal = async (query: string) => {
    let data;
    try {
      const response = await axios.post(graphqlEndpoint, {
        query,
      });
      let proposals = response.data.data.proposals;
      if (proposals.length > 0) {
        data = proposals[0];
      }
    } catch (error) {
      console.error('GraphQL Error:', error);
    }
    return data as ISnapshotProposal;
  }

  const getSnapshotVotes = async (query: string) => {
    let data;
    try {
      const response = await axios.post(graphqlEndpoint, {
        query,
      });
      data = response.data.data.votes;
    } catch (error) {
      console.error('GraphQL Error:', error);
    }
    return data as IVote[];
  }

  const createSnapshotProposal = async () => {
    const blockNumber = await ethersProvider.getBlockNumber()
    const startTimestamp = Math.floor(Date.now() / 1000);
    // ends in 5 minutes
    const endTimestamp = Math.floor(Date.now() / 1000) + 60 * 60;

    const proposalToCreate: ISnapshotProposalCreateRequest = {
      space: snapshotSpace,
      type: voteType,
      title: bountyTitle || "",
      body: `To read more about this bounty, go to http://localhost:3000/dashboard/bounties/${service.id}`,
      discussion: '',
      choices: proposals.map((proposal) => proposal.seller.handle),
      start: startTimestamp,
      end: endTimestamp,
      snapshot: blockNumber,
      plugins: JSON.stringify({}),
    }

    try {
      //@ts-ignore
      await client.proposal(signer, account?.address || "", proposalToCreate);
      setProposalCreated(true);
    } catch(error) {
      console.error("error on createSnapshotProposal", error);
    }
  }

  const castSnapshotVote = async () => {
    // we need an array for choices
    // we have to list the indexes of the choices
    // the index refers to the index of the choice in the snapshotProposal.choices array
    let choices: number[] = [];
    checkedItems.forEach((handle) => {
      const index = snapshotProposal?.choices.findIndex((choice) => choice === handle);
      if (index !== undefined && index !== -1) {
        choices.push(index+1);
      }
    })
    const voteToCast: ISnapshotCastVoteRequest = {
      space: snapshotSpace,
      proposal: snapshotProposal?.id || "",
      type: voteType,
      choice: choices,
    }
    console.log(voteToCast)
    try {
      // @ts-ignore
      await client.vote(signer, account?.address || "", voteToCast);
      setVoteCasted(true);
      setCheckedItems([]);
    } catch(error) {
      console.error("error on castSnapshotVote", error);
    }
  }

  console.log(snapshotProposal)
  console.log(snapshotVotes)

  const snapshotProposalStatus = 
    proposals.length === 0 && "Waiting for proposals" ||
    isBountyExpired && !snapshotProposal && "To start" ||
    !isSnapshotExpired && snapshotProposal && "In progress" ||
    snapshotProposal && isSnapshotExpired && "Finished"

  const showRanking = snapshotProposalStatus !== "Waiting for proposals" && snapshotProposalStatus !== "To start"

  const SnapshotProposalsRanking: Map<string, number> = new Map<string, number>();

  if (snapshotProposal) {
    snapshotProposal.scores.forEach((score, index) => {
      SnapshotProposalsRanking.set(snapshotProposal.choices[index], score);
    })
  }

  if (showRanking) {
    proposals.sort((a, b) => {
      const aScore = SnapshotProposalsRanking.get(a.seller.handle) || 0;
      const bScore = SnapshotProposalsRanking.get(b.seller.handle) || 0;
      return bScore - aScore;
    })
  }

  const handleCheckboxChange = (handle: string) => {
    if (checkedItems.includes(handle)) {
      setCheckedItems(checkedItems.filter((item) => item !== handle));
    } else {
      setCheckedItems([...checkedItems, handle]);
    }
  };

  const userAlreadyVoted = snapshotVotes.find((vote) => vote.voter === account?.address);
  const votedByUserAsIndex = snapshotVotes.find((vote) => vote.voter === account?.address)?.choice;
  const votedByUserAsHandles = votedByUserAsIndex?.map((index) => snapshotProposal?.choices[index-1]);

  useEffect(() => {
    const getProposal = async () => {
      const proposal = await getSnapshotProposal(queryGetProposalByTitle(bountyTitle));
      setSnapshotProposal(proposal);
      if (proposal) {
        const votes = await getSnapshotVotes(queryGetVotesByProposalId(proposal.id));
        setSnapshotVotes(votes);
      } else {
        setSnapshotVotes([]);
      }
    }
    getProposal();
  }, [bountyTitle, proposalCreated, voteCasted]);

  return (
    <>
      <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424]'>
        <div className='flex flex-col items-top justify-between gap-4 w-full'>
          <div className='flex flex-col justify-start items-start gap-4'>
            <div className='flex items-center justify-start w-full relative'>
              <Image
                src={`/images/default-avatar-${Number(service.buyer.id) % 9}.jpeg`}
                className='w-10 mr-4 rounded-full'
                width={50}
                height={50}
                alt='default avatar'
              />
              <div className='flex flex-col'>
                <p className='text-gray-100 font-medium break-all'>{service.description?.title}</p>
                <p className='text-xs text-gray-500'>
                  created by {isBuyer ? 'You' : service.buyer.handle} the{' '}
                  {formatDate(Number(service.createdAt) * 1000)}
                </p>
              </div>
              <span className='absolute right-[-25px] top-[-25px] inline-flex items-center'>
                <ServiceStatus status={service.status} />
              </span>
            </div>

            <div className=' border-t border-gray-700 pt-4 w-full'>
              {service.seller && (
                <Link
                  className='text-md text-gray-400 mt-4'
                  href={`/dashboard/profile/${service.seller.id}`}>
                  Bounty submission by <span className='text-gray-100'>{service.seller.handle}</span>
                </Link>
              )}

              <div className='text-md text-gray-400 mt-4'>
                <strong>Proposer rating:</strong>
                <Stars
                  rating={Number(service.buyer.rating)}
                  numReviews={service.buyer.userStats.numReceivedReviews}
                />
              </div>
              <div>
                <p className='text-md text-gray-400 mt-4'>
                  <strong>Bounty description:</strong>
                </p>
                <p className='mt-2'>
                  {service.description?.about}
                </p>
              </div>
              {service.description?.rateToken && service.description?.rateAmount && (
                <p className='text-md mt-4'>
                  <strong className='text-gray-400'>Prize:</strong>{' '}
                  {renderTokenAmountFromConfig(
                    chainId,
                    service.description.rateToken,
                    service.description.rateAmount,
                  )}
                </p>
              )}
              { 
                service.description?.keywords_raw &&
                <p className='text-md mt-4'>
                  <strong className='text-gray-400'>Keywords:</strong>{' '}
                  {service.description?.keywords_raw?.split(',').map((keyword, i) => (
                    <span
                      key={i}
                      className='inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2'>
                      {keyword}
                    </span>
                  )) || 
                    'none'
                  }
                </p>
              }
            </div>
          </div>

          <div className='flex flex-row gap-4 items-center border-t border-gray-700 pt-4'>
            {!isBuyer && !isJudge && service.status == ServiceStatusEnum.Opened && (
              <>
                {!userProposal && (
                  <Link
                    className='text-black bg-[#FFAE00] hover:bg-[#FF5500] hover:text-white px-3 py-2 rounded text-sm'
                    href={`/dashboard/bounties/${service.id}/application`}>
                    Submit application
                  </Link>
                )}
                <ContactButton
                  userAddress={service.buyer?.address}
                  userHandle={service.buyer.handle}
                />
              </>
            )}
            {(isBuyer || isSeller) &&
              service.status === ServiceStatusEnum.Finished &&
              !hasReviewed && (
                <ReviewModal
                  service={service}
                  userToReview={isBuyer ? service.seller : service.buyer}
                />
              )}
            {account && service.status !== ServiceStatusEnum.Opened && (
              <PaymentModal service={service} payments={payments} isBuyer={isBuyer} />
            )}
          </div>
        </div>
      </div>

      {
        (!isBuyer && !isJudge) && snapshotProposal?.id && (
        <div className='flex flex-col gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424] mt-7'>
          <div className='flex flex-row gap-2 items-center'>
            <div className='flex items-center justify-start relative'>
              Snapshot Proposal:
            </div>
            <a className='underline text-[#ffae00] hover:text-[#ff5500]'
              target='_blank' href={`https://demo.snapshot.org/#/${snapshotSpace}/proposal/${snapshotProposal?.id}`}
            >
              {snapshotProposal?.id}
            </a>
          </div>
        </div>
      )}

      {
        (isBuyer || isJudge) && (
        <div className='flex flex-col gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424] mt-7'>
          <div className='flex flex-row items-top gap-4 w-full justify-between min-h-[2.5em]'>
            <div className='flex flex-row gap-2 items-center'>
              <div className='flex items-center justify-start relative'>
                Voting Status:
              </div>
              <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                {snapshotProposalStatus}
              </span>
            </div>
            {
              proposals.length > 0 && isBountyExpired && !snapshotProposal && (
                <button className='text-md text-black bg-[#ffae00] hover:bg-[#ff5500] hover:text-white px-3 py-2 rounded text-sm ease-in-out duration-150'
                  onClick={() => createSnapshotProposal()}
                >
                  Create Snapshot Proposal
                </button>
              )
            }
            {
              snapshotProposalStatus === "In progress" && checkedItems.length > 0 && (
                <button className='text-md text-black bg-[#ffae00] hover:bg-[#ff5500] hover:text-white px-[2em] py-[0.5em] rounded text-sm ease-in-out duration-150'
                  onClick={() => castSnapshotVote()}
                >
                  Vote
                </button>
              )
            }
          </div>
          {
            snapshotProposal?.id && (
            <div className='flex flex-row gap-2 items-center mt-3'>
              <div className='flex items-center justify-start relative'>
                Snapshot Proposal:
              </div>
              <a className='underline text-[#ffae00] hover:text-[#ff5500]'
                target='_blank' href={`https://demo.snapshot.org/#/${snapshotSpace}/proposal/${snapshotProposal?.id}`}
              >
                {snapshotProposal?.id}
              </a>
            </div>
          )}
          {
            userAlreadyVoted && (
            <div className='flex flex-row gap-2 items-center mt-3'>
              <div className='flex items-center justify-start relative'>
                You voted for:
              </div>
              <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                {votedByUserAsHandles?.join(", ")}
              </span>
            </div>
          )}
        </div>
      )}

      {(isBuyer || isSeller) && reviews.length > 0 && (
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-gray-900 font-bold'>Reviews:</p>
          {reviews.map((review, index) => (
            <ReviewItem review={review} key={index} />
          ))}
        </div>
      )}

      {userProposal && (
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-gray-900 font-bold'>Your proposal:</p>
          <ProposalItem proposal={userProposal} />
        </div>
      )}

      {(isBuyer || isJudge) && (
        <>
          {proposals.length > 0 ? (
            <>
              <p className='font-bold mt-8 mb-4 text-xl'>
                {
                  showRanking ?
                    "Ranking"
                    :
                  service.status === ServiceStatusEnum.Opened
                    ? 'Review proposals'
                    : 'Validated proposal'
                }
                :
              </p>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {validatedProposal ? (
                  <ProposalItem proposal={validatedProposal} />
                ) : (
                  proposals.map((proposal, i) => {
                    if (showRanking) {
                      if (snapshotProposalStatus === "In progress") {
                        proposal.status = ProposalStatusEnum.VoteOngoing;
                      } else {
                        proposal.status = ProposalStatusEnum.Ranking;
                      }
                    }
                    return (
                      <div key={i}>
                        {(service.status === ServiceStatusEnum.Opened ||
                          proposal.status === ProposalStatusEnum.Validated) && (
                          <ProposalItem
                            proposal={proposal}
                            index={i+1}
                            isCheckable={proposal.status === ProposalStatusEnum.VoteOngoing && !userAlreadyVoted}
                            checked={checkedItems.includes(proposal.seller.handle)}
                            handleCheckboxChange={handleCheckboxChange}
                          />
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </>
          ) : (
            <div
              className='flex p-4 text-sm text-gray-700 bg-gray-100 rounded-xl mt-4'
              role='alert'>
              <svg
                className='flex-shrink-0 inline w-5 h-5 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'></path>
              </svg>
              <span className='sr-only'>Info</span>
              <div>
                <span className='font-medium'>There is no proposal yet</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ServiceDetail;
