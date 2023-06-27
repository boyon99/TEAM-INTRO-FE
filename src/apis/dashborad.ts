import { axiosInstance } from './axios';

const getDashboard = async () => {
  const { data } = await axiosInstance().get('/api/s/user/dashboard');

  return data;
};

export { getDashboard };
