import React, { useEffect, useState } from 'react';
import Layout from '@/components/builder/Layout';
import LeftPanal from '@/components/builder/LeftPanel';
import { useQuery } from '@tanstack/react-query';
import { get } from 'http';
import { getIntroPage } from '@/apis/builder';
import useStore from '@/store';
import { useBuilder } from '@/hooks/useBuilder';

export default function Builder() {
  const { data: builderData, isLoading } = useBuilder();
  const { setTheme, setSiteInfo, setCompanyInfo, setHeaderAndFooterList, resetUploadImage, uploadImage, setKeyVisual } =
    useStore();

  useEffect(() => {
    if (!isLoading) {
      console.log(builderData);
      // CHRCKLIST - setHeaderAndFooter 초기 데이터 설정하기
      setCompanyInfo(builderData.company_info);
      setSiteInfo(builderData.site_info);
      setTheme({ theme_type: builderData.theme.type, color: builderData.theme.color });
      // setKeyVisual(builderData.key_visual);
    }
  }, [builderData]);

  // 페이지 진입 시 resetUploadImage 호출
  useEffect(() => {
    resetUploadImage();
  }, []);

  return (
    <>
      <Layout>{<LeftPanal />}</Layout>
    </>
  );
}
