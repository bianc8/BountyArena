import Image from 'next/image';
import { IReview } from '../types';
import { formatDate } from '../utils/dates';
import { useState } from 'react';

function ReviewItem({
  review,
  vcs = false
}: {
  review: IReview,
  vcs?: boolean
}) {
  const [show, setShow] = useState(false);
  const [vc, setVC] = useState("");

  const handleGetVC = async () => {
    const res = await fetch('/api/vc/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      mode: 'cors',
      body: JSON.stringify({
        review: review,
        address: review.to.address
      })
    })
    
    const data = await res.json()
    setVC(data.jwt);
  }

  if (!review) {
    return null;
  }

  return (
    <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424]  w-full'>
      <div className='flex flex-col items-top justify-between gap-4'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex items-center justify-start w-full  relative'>
            <Image
              src={`/images/default-avatar-${Number(review.to.id) % 9}.jpeg`}
              className='w-10 mr-4 rounded-full'
              width={50}
              height={50}
              alt='default avatar'
            />
            <div className='flex flex-col'>
              <p className='text-gray-100 font-medium break-all'>{review.to.handle}</p>
              <p className='text-xs text-gray-500'>
                Review created by {review.service.buyer.handle} the {formatDate(Number(review.createdAt) * 1000)}
              </p>
            </div>
          </div>

          <div className=' border-t border-gray-700 w-full'>
            <p className='text-sm text-gray-400 mt-4'>
              <strong>Rating:</strong> {review.rating}
            </p>
            <p className='text-sm text-gray-400 mt-4'>
              <strong>Message:</strong> {review.description?.content}
            </p>
            {
              vcs &&
              <button
                onClick={() => setShow(true)}
                className='block text-black bg-[#FFAE00] hover:bg-[#FFAE00] hover:text-white rounded-xl px-5 py-2.5 text-center mt-3'
                type='button'
                data-modal-toggle='defaultModal'>
                Get VC
              </button>
            }
          </div>
        </div>
      </div>

      {
        vcs &&
        (
          <div
            className={`${!show ? 'hidden' : ''
              } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-black/75 flex flex-col items-center justify-center`}>
            <div className='relative p-4 w-full max-w-2xl h-auto'>
              <div className='relative bg-white rounded-xl shadow '>
                <div className='flex justify-between items-start p-4 rounded-t border-b '>
                  <h3 className='text-xl font-semibold text-gray-900 '>Get your VC</h3>
                  <button
                    onClick={() => setShow(false)}
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-1.5 ml-auto inline-flex items-center '
                    data-modal-toggle='defaultModal'>
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'></path>
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>
                <div className='p-6 space-y-6'>
                  <div className='flex flex-col px-4 w-full space-y-6'>
                    <div className='flex flex-row justify-between'>
                      <h3 className='text-xl font-semibold text-gray-900 '>Why should you claim it?</h3>
                      <img
                        src='https://raw.githubusercontent.com/ensdomains/media-kit/main/media/logos/primary/ens_logo_primary.svg'
                        width="15%"
                      />
                    </div>
                    <p className='text-base leading-4 text-gray-800 mb-4'>
                      You can use your VC to prove your reputation in other platforms without the need of using only NFTs on this platform blockchain.
                      So we thougth to give you the possibility to claim your VC and save it on your ENS text-records. This way you can continue to build your identity and reputation
                      using ENS.
                    </p>
                    <hr />
                    <h3 className='text-xl font-semibold text-gray-900 '>Your Review data</h3>
                    <div className='justify-between w-full'>
                      <p className='text-base leading-4 text-gray-800 font-bold mb-4'>Review text</p>
                      <code className='text-base text-gray-800 font-normal'>
                        {review.description?.content}
                      </code>
                    </div>
                    <div className='justify-between w-full'>
                      <p className='text-base leading-4 text-gray-800 font-bold mb-4'>Rating</p>
                      <code className='text-base text-gray-800 font-normal'>
                        {review.rating}
                      </code>
                    </div>
                    {
                      vc && <>
                        <h3 className='text-xl font-semibold text-gray-900 '>Nice! This is your VC</h3>
                        <div className='justify-between w-full'>
                          <div className='flex align-middle justify-between'>
                            <p className='text-base leading-4 text-gray-800 font-bold mb-4'>Your credential as a JWT</p>
                            <button
                              onClick={() => { navigator.clipboard.writeText(vc) }}
                              className='px-3 py-1 border border-gray-400 rounded-xl text-gray-600 hover:bg-gray-200 mb-2'
                            >
                              Copy
                            </button>
                          </div>
                          <div className='overflow-x-auto bg-gray-300 mb-8 p-2 rounded-lg'>
                            <code className='text-base text-gray-800 font-normal whitespace-nowrap'>
                              {vc}
                            </code>
                          </div>
                          <p className='text-base leading-4 text-gray-800 mb-4'>
                            Now go to your <a href='https://app.ens.domains/' className='text-cyan-500' target='_blank'>ENS</a> text-records and save it there.
                          </p>
                        </div>
                      </>
                    }
                    <button
                      type='button'
                      className='ml-4 px-3 py-1 border border-gray-400 rounded-xl text-gray-600 hover:bg-gray-200'
                      onClick={handleGetVC}
                      disabled={vc ? true : false}
                    >
                      Claim your VC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ReviewItem;
