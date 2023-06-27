import { getUser } from '@/apis/auth';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    select: (data) => data.data,
  });
};

export default useUser;
