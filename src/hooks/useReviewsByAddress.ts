import { useState, useEffect } from 'react';
import { getReviewsByAddress } from '../queries/reviews';
import { IReview } from '../types';
import { useChainId } from './useChainId';

const useReviewsByAddress = (address: string): { reviews: IReview[] } => {
  const chainId = useChainId();
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsByAddress(chainId, address);
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [address]);

  return { reviews };
};

export default useReviewsByAddress;
