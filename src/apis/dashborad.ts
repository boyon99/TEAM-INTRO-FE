import { axiosInstance } from './axios';

const getDashboard = async () => {
  const { data } = await axiosInstance().get('/api/s/user/dashboard');

  return data;
};

export { getDashboard };

export const downloadDashboard = async (download: any) => {
  const { data } = await axiosInstance().post(`/api/dashboard/download`, download);
  return data;
};
