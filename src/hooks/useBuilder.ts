import { getIntroPage } from '@/apis/builder';
import { useQuery } from '@tanstack/react-query';

export const useBuilder = () => {
  const { data, isLoading, refetch } = useQuery(['getIntroPage'], () =>
    getIntroPage().then((a) => {
      return a.data;
    }),
  );
  return { data, isLoading, refetch };
};
