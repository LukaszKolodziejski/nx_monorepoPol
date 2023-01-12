import { useQuery } from 'react-query';

import fetchDetails from '../queries/fetchDetails';

export const useDetails = (id: number) => {
  const { data, isLoading, isError, isFetching, refetch } = useQuery(
    ['details', id],
    () => fetchDetails(id),
    {
      enabled: Boolean(id),
    }
  );

  return { data, isLoading, isError, isFetching, refetch };
};
