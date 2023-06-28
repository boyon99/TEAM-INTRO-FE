import { updateCompanyInfo, updateKeyVisual } from '@/apis/builder';
import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';

export const useUpdateKeyVisual = (keyVisual: any) => {
  const { mutate } = useMutation(() => updateKeyVisual(keyVisual), {
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
