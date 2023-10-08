import { useState } from 'react';
import useReviewsByAddress from '../hooks/useReviewsByAddress';
import useServices from '../hooks/useServices';
import { IUser } from '../types';
import ReviewItem from './ReviewItem';
import UserServiceItem from './UserServiceItem';

interface IProps {
  user: IUser;
  vcs?: boolean;
}

function UserReviews({ user, vcs = false }: IProps) {
  const { reviews } = useReviewsByAddress(user?.address as string);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className='mb-6 pb-4 border-b border-gray-gray-200 text-gray-100 font-medium break-all'>
        User Reviews
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          reviews.map((review, i) => {
            return <ReviewItem review={review} vcs={vcs} key={i} />;
          })
        }
      </div>

      {reviews.length === 20 && (
        <a
          href='#'
          className='px-5 py-2  border border-zinc-600 rounded-full text-zinc-600 hover:text-white hover:bg-[#191919]'>
          Load More
        </a>
      )}
    </>
  );
}

export default UserReviews;
