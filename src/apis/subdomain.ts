import { axiosInstance } from './axios';

export const postIntroPageUser = async (intro: any) => {
  const { data } = await axiosInstance().post<any>('/api/introPage', intro);
  return data;
};
