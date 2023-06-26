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
      const keyvisual = builderData.widgets.find((widget: any) => widget.widget_type === 'KEYVISUALANDSLOGAN');
      setHeaderAndFooterList(builderData.header_and_footer.header_and_footer_status_list);
      setCompanyInfo(builderData.company_info);
      setSiteInfo(builderData.site_info);
      setTheme({ theme_type: builderData.theme.type, color: builderData.theme.color });
      // CHECKLIST: 이미지 경로 제대로 전달되는지 테스트하기
      setKeyVisual({
        background: keyvisual.background,
        slogan: keyvisual.slogan,
        filter: keyvisual.filter,
        slogan_detail: keyvisual.slogan_detail,
      });
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
