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
  const { setTheme, siteInfo, companyInfo, setCompanyInfo } = useStore();

  useEffect(() => {
    if (!isLoading) {
      console.log(builderData.company_info);
      setCompanyInfo(builderData.company_info);
      setTheme({ theme: builderData.theme.type, color: builderData.theme.color });
    }
  }, [builderData]);

  return (
    <>
      <Layout>{<LeftPanal />}</Layout>
    </>
  );
}
