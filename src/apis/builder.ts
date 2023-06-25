import { axiosInstance } from './axios';

export const getIntroPage = async () => {
  const { data } = await axiosInstance().get<any>(`/api/s/user/introPage`);
  return data;
};

export const updateChannel = async () => {
  const { data } = await axiosInstance().patch<any>('/api/s/user/introPage/channel');
  const response = data.data;
  console.log(response);
  return response;
};

export const updateCompanyInfo = async (companyInfo: any) => {
  const { data } = await axiosInstance().patch<any>('/api/s/user/introPage/companyInfo', companyInfo);
  return data;
};

export const updateTheme = async (theme: any) => {
  const { data } = await axiosInstance().patch<any>('/api/s/user/introPage/theme', theme);
  return data;
};

export const updateSiteInfo = async (siteInfo: any) => {
  const { data } = await axiosInstance().patch<any>('/api/s/user/introPage/siteInfo', siteInfo);
  return data;
};

export const uploadImage = async (formData: any) => {
  console.log(formData);
  const { data } = await axiosInstance({ multi: true }).post<any>('/api/s/user/uploadImage', formData);
  return data;
};
