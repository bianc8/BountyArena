import { useState } from 'react';
import { IProposal } from '../../types';

function ShowProposalModal({ proposal }: { proposal: IProposal }) {
  const [show, setShow] = useState(false);

  const unixEpoch = Number(proposal.expirationDate) * 1000;
  const expirationDate = new Date(unixEpoch);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const expirationDateFormatted = `${expirationDate.getDate()} ${
    monthNames[expirationDate.getMonth()]
  } ${expirationDate.getFullYear()}`;
  const expirationHoursFormatted = `${expirationDate.getHours()}:${expirationDate.getMinutes()}`;

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className='block text-[#FFAE00] bg-white hover:bg-[#FFAE00] hover:text-white rounded-xl px-5 py-2.5 text-center'
        type='button'
        data-modal-toggle='defaultModal'>
        View
      </button>

      <div
        className={`${
          !show ? 'hidden' : ''
        } overflow-y-auto overflow-x-hidden fixed top-[15px] right-0 left-0 z-50 w-full md:inset-0 h-modal bg-black/75 flex flex-col items-center justify-center`}
        style={{height: '-webkit-fill-available'}}  
      >
        <div className='relative p-4 w-full max-w-2xl h-auto'>
          <div className='relative bg-white rounded-xl shadow '>
            <div className='flex justify-between items-start p-4 rounded-t border-b '>
              <h3 className='text-xl font-semibold text-gray-900 '>View Application</h3>
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
                <div className='items-center w-full'>
                  <div className='justify-between w-full'>
                    <p className='text-base leading-4 text-gray-800 font-bold mb-4'>Description</p>
                    <p className='text-base text-gray-800 font-normal'>
                      {proposal.description?.about.split('\n').map((item, key) => (
                        <span key={key}>
                          {item}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a
                      href={`${proposal.description?.video_url}`}
                      target='_blank'
                      className='text-base font-extrabold underline leading-4 text-gray-800'>
                      GitHub Repository URL
                    </a>
                  </div>
                  <div className='flex justify-between items-center w-full mt-4'>
                    <p className='text-base leading-4 text-gray-800 font-normal'>
                      <span className='font-extrabold'>Expires</span> the{' '}
                      <span className='font-extrabold'>{expirationDateFormatted}</span> at{' '}
                      <span className='font-extrabold'>{expirationHoursFormatted}</span> local time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProposalModal;
