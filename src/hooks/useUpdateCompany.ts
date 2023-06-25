import { updateCompanyInfo } from '@/apis/builder';
import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';

export const useUpdateCompany = (companyInfo: any) => {
  const { mutate } = useMutation(() => updateCompanyInfo(companyInfo), {
    onSuccess: (data) => {
      console.log('success', data);
      Router.push('/builder');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
  return mutate;
};
