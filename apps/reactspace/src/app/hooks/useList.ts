import { useQuery } from 'react-query';

import fetchList from '../queries/fetchList';

export const useList = () => {
  const { data, isLoading, isError, isFetching, refetch } = useQuery(
    ['list'],
    () => fetchList()
  );

  return { data, isLoading, isError, isFetching, refetch };
};
