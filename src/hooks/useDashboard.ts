import { getDashboard } from '@/apis/dashborad';
import { useQuery } from '@tanstack/react-query';

export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard', 'main'],
    queryFn: getDashboard,
    select: (data) => data.data,
  });
};
