import { updateCompanyInfo, updateSiteInfo } from '@/apis/builder';
import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';

export const useUpdateSite = (siteInfo: any) => {
  const { mutate } = useMutation(() => updateSiteInfo(siteInfo), {
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
