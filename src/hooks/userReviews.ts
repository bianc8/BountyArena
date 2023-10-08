

import { useState, useEffect } from 'react';
import { getReviews } from '../queries/reviews';
import { IReview } from '../types';
import { useChainId } from './useChainId';

const useReviews = (platformId: number): { reviews: IReview[] } => {
  const chainId = useChainId();
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviews(chainId, platformId);
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [platformId]);

  return { reviews };
};

export default useReviews;
