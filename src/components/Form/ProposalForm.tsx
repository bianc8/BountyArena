import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { formatUnits } from 'viem';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import * as Yup from 'yup';
import TalentLayerContext from '../../context/talentLayer';
import ServiceRegistry from '../../contracts/ABI/TalentLayerService.json';
import useAllowedTokens from '../../hooks/useAllowedTokens';
import { useChainId } from '../../hooks/useChainId';
import { useConfig } from '../../hooks/useConfig';
import Web3MailContext from '../../modules/Web3mail/context/web3mail';
import { createWeb3mailToast } from '../../modules/Web3mail/utils/toast';
import { IProposal, IService, IUser } from '../../types';
import { postToIPFS } from '../../utils/ipfs';
import { getProposalSignature } from '../../utils/signature';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import ServiceItem from '../ServiceItem';
import { delegateCreateOrUpdateProposal } from '../request';
import SubmitButton from './SubmitButton';
import usePlatform from '../../hooks/usePlatform';
import { chains } from '../../pages/_app';

interface IFormValues {
  about: string;
  rateToken: string;
  rateAmount: number;
  expirationDate: number;
  video_url: string;
}

const validationSchema = Yup.object({
  about: Yup.string().required('Please provide a description of your service'),
  rateToken: Yup.string().required('Please select a payment token'),
  rateAmount: Yup.string().required('Please provide an amount for your service'),
  expirationDate: Yup.number().integer().required('Please provide an expiration date'),
});

function ApplicationForm({
  user,
  service,
  existingProposal,
}: {
  user: IUser;
  service: IService;
  existingProposal?: IProposal;
}) {
  const config = useConfig();
  const chainId = useChainId();
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });
  const { address } = useAccount();
  const router = useRouter();
  const allowedTokenList = useAllowedTokens();
  const { isActiveDelegate } = useContext(TalentLayerContext);
  const { platformHasAccess } = useContext(Web3MailContext);

  const currentChain = chains.find(chain => chain.id === chainId);
  const platform = usePlatform(process.env.NEXT_PUBLIC_PLATFORM_ID as string);
  const proposalPostingFee = platform?.proposalPostingFee || 0;
  const proposalPostingFeeFormat = proposalPostingFee
    ? Number(formatUnits(BigInt(proposalPostingFee), Number(currentChain?.nativeCurrency.decimals)))
    : 0;

  if (allowedTokenList.length === 0) {
    return <div>Loading...</div>;
  }

  let existingExpirationDate, existingRateTokenAmount;

  if (existingProposal) {
    existingExpirationDate = Math.floor(
      (Number(existingProposal?.expirationDate) - Date.now() / 1000) / (60 * 60 * 24),
    );

    const token = allowedTokenList.find(
      token => token.address === existingProposal?.rateToken.address,
    );

    existingRateTokenAmount = parseFloat(
      formatUnits(BigInt(existingProposal.rateAmount), Number(token?.decimals)),
    );
  }

  const initialValues: IFormValues = {
    about: existingProposal?.description?.about || '',
    rateToken: existingProposal?.rateToken.address || allowedTokenList[0].address,
    rateAmount: existingRateTokenAmount || (service.description?.rateAmount ? +service.description?.rateAmount : 0 ),
    expirationDate: existingExpirationDate || 15,
    video_url: existingProposal?.description?.video_url || '',
  };

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    console.log("ONSUBMIT")
    const token = allowedTokenList.find(token => token.address === values.rateToken);
    if (publicClient && token && walletClient) {
      try {
        const now = Math.floor(Date.now() / 1000);
        const convertExpirationDate = now + 60 * 60 * 24 * values.expirationDate;
        const convertExpirationDateString = convertExpirationDate.toString();

        const cid = await postToIPFS(
          JSON.stringify({
            about: values.about,
            video_url: values.video_url,
          }),
        );

        // Get platform signature
        const signature = await getProposalSignature({
          profileId: Number(user.id),
          cid,
          serviceId: Number(service.id),
        });

        let tx;
        if (isActiveDelegate) {
          const response = await delegateCreateOrUpdateProposal(
            chainId,
            user.id,
            user.address,
            service.id,
            values.rateToken,
            values.rateAmount.toString(),
            cid,
            convertExpirationDateString,
            existingProposal?.status,
          );
          tx = response.data.transaction;
        } else {
          tx = await walletClient.writeContract({
            address: config.contracts.serviceRegistry,
            abi: ServiceRegistry.abi,
            functionName: existingProposal ? 'updateProposal' : 'createProposal',
            args: existingProposal
              ? [
                  user.id,
                  service.id,
                  values.rateToken,
                  // parsedRateAmountString,
                  values.rateAmount.toString(),
                  cid,
                  convertExpirationDateString,
                ]
              : [
                  user.id,
                  service.id,
                  values.rateToken,
                  // parsedRateAmountString,
                  values.rateAmount.toString(),
                  process.env.NEXT_PUBLIC_PLATFORM_ID,
                  cid,
                  convertExpirationDateString,
                  signature,
                ],
            account: address,
            value: existingProposal ? 0n : BigInt(proposalPostingFee),
          });
        }

        await createMultiStepsTransactionToast(
          chainId,
          {
            pending: 'Creating your proposal...',
            success: 'Congrats! Your proposal has been added',
            error: 'An error occurred while creating your proposal',
          },
          publicClient,
          tx,
          'proposal',
          cid,
        );
        setSubmitting(false);
        resetForm();
        router.push(`/dashboard`);
        if (process.env.NEXT_PUBLIC_ACTIVE_WEB3MAIL == 'true' && !platformHasAccess) {
          createWeb3mailToast();
        }
      } catch (error) {
        showErrorTransactionToast(error);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form>
          <h2 className='mb-2 text-white font-bold'>For the bounty:</h2>
          <ServiceItem service={service} />

          <h2 className='text-md mt-8 mb-2 text-white font-bold'>Describe your application in details:</h2>
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-[#262424]'>
            <label className='block'>
              <span className='text-gray-100'>Description</span>
              <Field
                as='textarea'
                id='about'
                rows={8}
                name='about'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-[#191919] shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='description' />
              </span>
            </label>

            <label className='block flex-1'>
              <span className='text-gray-100'>Expiration Date (Days)</span>
              <Field
                type='number'
                id='expirationDate'
                name='expirationDate'
                className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-[#191919] shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='expirationDate' />
              </span>
            </label>
            <label className='block flex-1'>
              <span className='text-gray-100'>Video URL (optional)</span>
              <Field
                type='text'
                id='video_url'
                name='video_url'
                className='mt-1 mb-2 block w-full rounded-xl border border-gray-700 bg-[#191919] shadow-sm focus:ring-opacity-50'
                placeholder='Enter video URL'
              />
              <span className='text-red-500'>
                <ErrorMessage name='video_url' />
              </span>
            </label>
            {proposalPostingFeeFormat !== 0 && !existingProposal && (
              <span className='text-gray-100'>
                Fee for making a proposal: {proposalPostingFeeFormat}{' '}
                {currentChain?.nativeCurrency.symbol}
              </span>
            )}
            <SubmitButton isSubmitting={isSubmitting} label='Post' />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ApplicationForm;
