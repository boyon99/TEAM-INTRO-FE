import { ContactUs } from '@/interfaces/dashboard';
import { axiosInstance } from './axios';

const getDashboard = async () => {
  const { data } = await axiosInstance().get('/api/s/user/dashboard');

  return data;
};

const getContact = async ({ status, page = 0 }: ContactUs) => {
  const { data } = await axiosInstance().get(`/api/s/user/dashboard/contactUs?status=${status}&page=${page}`);

  return data;
};

export { getDashboard, getContact };
