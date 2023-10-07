import { useEffect, useState } from 'react';
import { getUserByPlatformId, getUsers } from '../queries/users';
import { IUser } from '../types';
import { useChainId } from './useChainId';

const useUsers = (
  searchQuery?: string,
  numberPerPage?: number,
): { hasMoreData: boolean; loading: boolean; users: IUser[]; loadMore: () => void } => {
  const chainId = useChainId();
  const [users, setUsers] = useState<IUser[]>([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setUsers([]);
    setOffset(0);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("calling getUserByPlatformId with searchQuery: ", searchQuery)
        const response = await getUserByPlatformId(chainId, numberPerPage, offset, searchQuery);

        if (offset === 0) {
          setUsers(response.data.data.users || []);
        } else {
          setUsers([...users, ...response.data.data.users]);
        }

        if (numberPerPage && response?.data?.data?.users.length < numberPerPage) {
          setHasMoreData(false);
        } else {
          setHasMoreData(true);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [numberPerPage, offset, searchQuery]);

  const loadMore = () => {
    numberPerPage ? setOffset(offset + numberPerPage) : '';
  };

  return { users, hasMoreData: hasMoreData, loading, loadMore };
};

export default useUsers;
