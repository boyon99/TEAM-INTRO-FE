import { ContactUs } from '@/interfaces/dashboard';
import { axiosInstance } from './axios';

const getDashboard = async () => {
  const { data } = await axiosInstance().get('/api/s/user/dashboard');

  return data;
};

const getContact = async ({ status, page }: ContactUs) => {
  const { data } = await axiosInstance().get(`/api/s/user/dashboard/contactUs?status=${status}&page=${page}`);

  return data;
};

const changeContactStatus = async (idList: number[], action: string) => {
  const { data } = await axiosInstance().put('/api/s/user/dashboard/contactUs', {
    status: action,
    contact_us_id_list: idList,
  });

  return data;
};

const getExcelLink = async (status: string) => {
  const { data } = await axiosInstance().post(
    '/api/s/user/dashboard/contactUs/excel',
    {
      status,
    },
    { responseType: 'blob' },
  );

  return data;
};

export { getDashboard, getContact, changeContactStatus, getExcelLink };
