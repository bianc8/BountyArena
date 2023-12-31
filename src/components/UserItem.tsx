import Link from 'next/link';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import useUserById from '../hooks/useUserById';
import { IUser } from '../types';
import Loading from './Loading';

function UserItem({ user }: { user: IUser }) {
  const { user: currentUser } = useContext(TalentLayerContext);
  const userDescription = user?.id ? useUserById(user?.id)?.description : null;

  if (!user?.id) {
    return <Loading />;
  }

  return (
    <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-700 text-white bg-[#262424]'>
      <div className='flex flex-col items-top justify-between w-full'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex items-center justify-start mb-4'>
            <img
              src={
                user?.description?.image_url
                  ? user?.description?.image_url
                  : `/images/default-avatar-${Number(user?.id ? user.id : '1') % 9}.jpeg`
              }
              className='w-10 mr-4 rounded-full'
              width={50}
              height={50}
              alt='default avatar'
            />
            <div className='flex flex-col'>
              <p className='text-gray-100 font-medium break-all'>{user.handle}</p>
              <p className='text-md text-gray-500'>{userDescription?.title || ''}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4 justify-end items-center'>
          <Link
            className='px-3 py-2 rounded text-sm border border-[#FFAE00] bg-black text-[#FFAE00] hover:bg-gray-700 transition ease-in-out duration-150'
            href={`/dashboard/profile/${user.id}`}>
            View profile
          </Link>
          {currentUser?.id === user.id && (
            <Link
              className='text-[#ff5500] bg-black hover:bg-gray-700 border border-[#ff5500] hover:text-white px-3 py-2 text-sm rounded'
              href={`/dashboard/profile/edit`}>
              Edit profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserItem;
