import Link from 'next/link';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import useServiceById from '../hooks/useServiceById';
import { IProposal, ProposalStatusEnum, ServiceStatusEnum } from '../types';
import { formatDate } from '../utils/dates';
import ValidateProposalModal from './Modal/ValidateProposalModal';
import ShowProposalModal from './Modal/ShowProposalModal';
import Image from 'next/image';
import { TrophyIcon } from '@heroicons/react/24/solid';

function ProposalItem({ 
  proposal, index, isCheckable, checked, handleCheckboxChange
}:{ 
  proposal: IProposal,
  index?: number,
  isCheckable?: boolean,
  checked?: boolean,
  handleCheckboxChange?: (handle: string) => void
}) {
  const { user, account } = useContext(TalentLayerContext);
  const service = useServiceById(proposal.service.id);

  if (!service) {
    return null;
  }

  const isBuyer = user?.id === proposal.service.buyer.id;

  const judges = [
    "0x162A2d9A85544d7EB4bc1DEaD0BcBf3F505b903b",
    "0x92Fb4FC6C86669A6F33E2D5023CDc3cfcA22aB9c",
    "0xE27527c537166e4A8Bc40ED629C19c07279E1DD1"
  ]

  const isJudge = judges.includes(account?.address as string)

  return (
    <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424]'>
      <div className='flex flex-col items-top justify-between gap-4 w-full'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex items-center justify-start w-full  relative'>
            <Image
              src={`/images/default-avatar-${Number(proposal.seller.id) % 9}.jpeg`}
              className='w-10 mr-4 rounded-full'
              width={50}
              height={50}
              alt='default avatar'
            />
            <div className='flex flex-col'>
              <p className='text-gray-100 font-medium break-all'>
                {proposal.seller.handle} - {service.description?.title}
              </p>
              <p className='text-xs text-gray-500'>
                Proposal created the {formatDate(Number(proposal.createdAt) * 1000)}
              </p>
              <p className='text-xs text-gray-500'>
                Expires the {formatDate(Number(proposal.expirationDate) * 1000)}
              </p>
            </div>

            {(
              proposal.status === ProposalStatusEnum.Ranking || 
              proposal.status === ProposalStatusEnum.VoteOngoing 
            ) && (
              index === 1 ?
                <span className="w-[2.5em] h-[2.5em] absolute right-[-25px] top-[-25px] flex justify-center rounded-full bg-[#ffae00] font-bold px-2.5 py-1 text-md text-black">
                  <TrophyIcon />
                </span>
              :
                <span className="w-[2em] h-[2em] absolute right-[-25px] top-[-25px] flex justify-center rounded-full bg-[#ffae00] font-bold px-2.5 py-1 text-md text-black">
                  {index}
                </span>
            )}
          </div>

          <div className=' border-t border-gray-700 w-full'>
            <p className='text-sm text-gray-400 mt-4'>
              <strong>Message: </strong>
              {proposal.description?.about && proposal.description.about.length > 50
                ? `${proposal.description?.about.substring(0, 50)}...`
                : proposal.description?.about}
            </p>
            {proposal.description?.video_url && (
              <p className='text-sm text-gray-400'>
                <a target='_blank' href={`${proposal.description?.video_url}`} className='underline'>
                  <strong>Repository link</strong>
                </a>
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-row gap-4 justify-between items-center border-t border-gray-700 pt-4'>
          {account && (isBuyer || isJudge) && (
            <ShowProposalModal proposal={proposal} />
          )}
          {/* show Validate button IFF Snapshot vote is finished (=== .Ranking) */}
          {account && isBuyer && proposal.status === ProposalStatusEnum.Ranking && index === 1 && (
            <ValidateProposalModal proposal={proposal} account={account} />
          )}
          {
            handleCheckboxChange && isCheckable && (
              <div className='flex flex-row gap-4 justify-between items-center'>
                <div>
                  Select to vote
                </div>
                <input className='w-5 h-5 text-yellow-400 border border-gray-700 rounded-full cursor-pointer'
                  type='checkbox' checked={checked} onChange={() => handleCheckboxChange(proposal.seller.handle)}
                />
              </div>
            )
          }
        </div>
        {account &&
          !isBuyer && !isJudge &&
          proposal.status === ProposalStatusEnum.Pending &&
          service.status === ServiceStatusEnum.Opened && (
            <div className='flex flex-row gap-4 items-center border-t border-gray-700 pt-4'>
              <Link
                className='text-zinc-600 bg-zinc-50 hover:bg-zinc-500 hover:text-white px-3 py-2 rounded text-sm'
                href={`/dashboard/bounties/${service.id}/application`}>
                Edit application
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

export default ProposalItem;
