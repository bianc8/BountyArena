import { useContext, useState } from 'react';
import ServiceForm from '../../../components/Form/ServiceForm';
import Steps from '../../../components/Steps';
import TalentLayerContext from '../../../context/talentLayer';
import ConnectButton from '../../../modules/Messaging/components/ConnectButton';
import MessagingContext from '../../../modules/Messaging/context/messging';
import useMasca from '../../../hooks/useMasca';
import ReviewForm from '../../../components/Form/ReviewForm';

function CreateReview() {
  const { account, user } = useContext(TalentLayerContext);
  const { userExists } = useContext(MessagingContext);
  const [vc, setVC] = useState<any>();
  const { createVC, getDID } = useMasca();
  const [reviewTitle, setReviewTitle] = useState<string>('');
  const [reviewDescription, setReviewDescription] = useState<string>('');


  const handleCreateVC = async () => {
    console.log('handleCreateVC')

    const issuerDid = await getDID();
    console.log('issuerDid', issuerDid)

    const payload = {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      issuer: issuerDid.data,
      issuanceDate: new Date().toISOString(),
      credentialSubject: {
        id: 'did:ethr:0x3c2a2baa5b5a2e99e3d8e5e2e4d6bcb8e4e2e2e2',  // subject did
        title: reviewTitle,
        description: reviewDescription,
      },
    };

    const result = await createVC(account?.address as string || null, payload);
    if (result)
      setVC(result);
  }

  if (!user) {
    return <Steps />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className='-mx-6 -mt-6 sm:mx-0 sm:mt-0'>
        <p className='flex py-2 px-6 sm:px-0 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700 md:px-8 '>
          Post <span className='text-gray-100 ml-1'> a job </span>
        </p>
      </div>

      {!userExists() && account?.isConnected && user && (
        <div className='border border-redpraha rounded-xl p-8'>
          <p className='text-gray-500 py-4'>
            In order to create a service, you need to be registered to our decentralized messaging
            service Please sign in to our messaging service to verify your identity
          </p>
          <ConnectButton />
        </div>
      )}

      {account?.isConnected && user && userExists() && (
        <>
          <ReviewForm serviceId='test' />
          <div>
            <label className='font-bold' htmlFor='title'>
              Title
            </label>
            <input
              className='rounded-lg border border-gray-500 px-2 py-1 bg-gray-600'
              type='text'
              id='title'
              name='title'
              value={reviewTitle}
              onChange={e => setReviewTitle(e.target.value)}
            />
          </div>
          <div>
            <label className='font-bold' htmlFor='title'>
              Write your judgment note here
            </label>
            <input
              className='rounded-lg border border-gray-500 px-2 py-1 bg-gray-600'
              type='textarea'
              id='reviewDescription'
              name='reviewDescription'
              value={reviewDescription}
              onChange={e => setReviewDescription(e.target.value)}
            />
          </div>
          
          <code>
            {JSON.stringify(vc)}
          </code>
          
          <button onClick={handleCreateVC}>Create VC</button>
          
        </>
      )}
    </div>
  );
}

export default CreateReview;