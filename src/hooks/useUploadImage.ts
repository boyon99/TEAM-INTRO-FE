import { useMutation } from '@tanstack/react-query';
import { useBuilder } from './useBuilder';
import { uploadImage } from '@/apis/builder';
import { AxiosError } from 'axios';
import Router from 'next/router';
import useStore from '@/store';
import { useUpdateCompany } from './useUpdateCompany';
import { useUpdateSite } from './useUploadSite';
import { useUpdateKeyVisual } from './useUpdateKeyVusial';

export const useUploadImage = (imgSrc: any, type: string) => {
  const { companyInfo, setCompanyInfo, siteInfo, setSiteInfo, keyVisual, setKeyVisual } = useStore();
  const { mutate, isSuccess } = useMutation(() => uploadImage({ image: imgSrc }), {
    onSuccess: (data) => {
      console.log(data);
      // 데이터 성공 시 store에 저장 및 업데이트
      if (type === 'company') {
        setCompanyInfo({ ...companyInfo, logo: data.data.upload_path });
        // useUpdateCompany(companyInfo);
      }
      if (type === 'site') {
        setSiteInfo({ ...siteInfo, pavicon: data.data.upload_path });
        // useUpdateSite(siteInfo);
      }
      if (type === 'keyvisual') {
        setKeyVisual({ ...keyVisual, background: data.data.upload_path });
        // useUpdateKeyVisual(keyVisual);
      }
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
  return { mutate, isSuccess };
};
