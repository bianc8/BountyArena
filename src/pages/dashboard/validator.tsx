import { useState } from 'react';
import useVerifyVC from '../../hooks/useVerifyVC';

import * as didJWT from 'did-jwt';

function validator() {
  const [vc, setVc] = useState('');
  const [verificationResult, setVerificationResult] = useState<didJWT.JWTVerified>();

  const handleVerification = () => {
    useVerifyVC(vc).then(result => {
      setVerificationResult(result);
    });
  };

  console.log('verificationResult', verificationResult);

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className='-mx-6 -mt-6 sm:mx-0 sm:mt-0'>
        <p className='flex py-2 sm:px-0 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700'>
          Validate a <span className='text-gray-100 ml-1'> Verifiable Credential (VC)</span>
        </p>
      </div>

      <p className='mb-8'>
        <span className='font-bold'>Verifiable Credentials (VCs)</span> are a tamper-proof, cryptographically signed
        credential that can be used to prove things about you, in this case reviews about your projects. VCs are signed and issued by our Decentralized Identifier 
        and can be verified by anyone. You can store VCs wherever you want, but BountyArena wants to incentive you to store them inside your ENS domain text-records
        so you can start building your reputation and take all information directly from there.
      </p>

      <p>
        To prove that a credential is valid, you can paste it below and click on the <span className='font-bold'>Verification</span> button. Credential will be verified only
        if it is correctly signed by our issuer.<br/>
        If you want to check it manually, take care that our issuer DID is:
      </p>

      <pre className='bg-gray-500 text-white text-center m-auto mb-8 mt-8 p-3 px-5 rounded-lg text-lg w-fit'>
        {process.env.NEXT_PUBLIC_DID_KEY}
      </pre>

      <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-[#262424]'>
        <p className='text-xl font-medium tracking-wider'>Paste your VC below</p>
        <div className='flex justify-center items-center gap-10 flex-col'>
          <input
            className='w-full px-5 py-2 mt-5 content-center border border-zinc-600 rounded-full text-zinc-600'
            type='text'
            placeholder='Paste your VC here'
            onChange={e => setVc(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className={`px-5 py-2 content-center rounded-full hover:text-white hover:bg-[#FF5500] text-black bg-[#FFAE00] transition ease-in-out duration-150`}
          onClick={handleVerification}>
          Verification
        </button>
      </div>

      {verificationResult && (
        <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-[#262424] mt-4 align-middle'>
          <div className='flex gap-2 items-center align-top'>
            <p className='text-xl font-medium tracking-wider'>Result:</p>
            {verificationResult.verified ? (
              <>
                <p className='text-xl font-medium tracking-wider'>
                  Valid
                </p>
                <img src='/images/bountyarena/success.png' className='w-5 h-5' />
              </>
            ) : (
              <>
                <p className='text-xl font-medium tracking-wider'>
                  Error
                </p>
                <img src='/images/bountyarena/error.png' className='w-5 h-5' />
              </>
            )}
          </div>

          <textarea
            className='mb-1 block w-full rounded-xl border border-gray-700 bg-[#191919] shadow-sm focus:ring-opacity-50 min-h-screen'
            value={verificationResult ? JSON.stringify(verificationResult, null, 2) : undefined}
          />
        </div>
      )}
    </div>
  );
}

export default validator;
