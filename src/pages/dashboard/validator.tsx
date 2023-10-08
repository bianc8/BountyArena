import { useState } from "react";
import useVerifyVC from "../../hooks/useVerifyVC";

import * as didJWT from 'did-jwt';


function validator() {
    const [vc, setVc] = useState('')
    const [verificationResult, setVerificationResult] = useState<didJWT.JWTVerified>()

    const handleVerification = () => {
        useVerifyVC(vc).then((result) => {
            setVerificationResult(result);
        });
    }

    console.log('verificationResult', verificationResult)

    return (
        <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
            <div className='-mx-6 -mt-6 sm:mx-0 sm:mt-0'>
                <p className='flex py-2 px-6 sm:px-0 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700 md:px-8 '>
                    Validate a <span className='text-gray-100 ml-1'> VC</span>
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-[#262424]">
                <p className='text-xl font-medium tracking-wider'>
                    Paste your VC below
                </p>
                <div className='flex justify-center items-center gap-10 flex-col'>
                    <input
                        className='w-full px-5 py-2 mt-5 content-center border border-zinc-600 rounded-full text-zinc-600 
                        hover:text-white hover:bg-[#191919]
                        '
                        type='text'
                        placeholder='Paste your VC here'
                        onChange={(e) => setVc(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className={`px-5 py-2 content-center border border-zinc-600 rounded-full text-zinc-600 
                    hover:text-white hover:bg-[#191919]
                    `}
                    onClick={handleVerification}
                >
                    Verification
                </button>
            </div>

            {
                verificationResult &&
                    <div className="grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-[#262424] mt-4">
                        <div className="flex justify-between">
                        <p className='text-xl font-medium tracking-wider mb-4'>
                            Verification Result
                        </p>

                        {
                            verificationResult.verified ?
                                <img src='/images/bountyarena/success.png' className='w-10 h-10' />
                            :
                                <img src='/images/bountyarena/error.png' className='w-10 h-10' />
                        }
                        </div>
                    
                        
                        <textarea
                            className='mb-1 block w-full rounded-xl border border-gray-700 bg-[#191919] shadow-sm focus:ring-opacity-50 min-h-screen'
                            value={
                                verificationResult ? 
                                    JSON.stringify(verificationResult, null, 2)
                                :
                                    undefined
                            }
                        />
                    </div>
            }   
        </div>
    )
}

export default validator;