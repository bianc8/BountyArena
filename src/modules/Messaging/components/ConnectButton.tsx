import { useContext } from 'react';
import MessagingContext from '../context/messging';

function ConnectButton() {
  const { handleRegisterToMessaging } = useContext(MessagingContext);

  return (
    <button
      type='submit'
      className='bg-[#FFAE00] text-white font-bold py-2 px-4 rounded'
      onClick={() => handleRegisterToMessaging()}>
      Connect to XMTP
    </button>
  );
}

export default ConnectButton;
