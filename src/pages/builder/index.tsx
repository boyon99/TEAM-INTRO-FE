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
  const {
    setTheme,
    setSiteInfo,
    setCompanyInfo,
    setHeaderAndFooterList,
    resetUploadImage,
    uploadImage,
    setKeyVisual,
    setMissionVision,
    setChannel,
  } = useStore();

  useEffect(() => {
    if (!isLoading) {
      console.log(builderData);
      const keyvisual = builderData.widgets.find((widget: any) => widget.widget_type === 'KEYVISUALANDSLOGAN');
      const missionvision = builderData.widgets.find((widget: any) => widget.widget_type === 'MISSIONANDVISION');
      const channel = builderData.widgets.find((widget: any) => widget.widget_type === 'CHANNEL');
      setHeaderAndFooterList(builderData.header_and_footer.header_and_footer_status_list);
      setCompanyInfo(builderData.company_info);
      setSiteInfo(builderData.site_info);
      setTheme({ theme_type: builderData.theme.type, color: builderData.theme.color });
      setKeyVisual({
        background: keyvisual.background,
        slogan: keyvisual.slogan,
        filter: keyvisual.filter,
        slogan_detail: keyvisual.slogan_detail,
      });
      setMissionVision({
        mission: missionvision.mission,
        mission_detail: missionvision.mission_detail,
        vision: missionvision.vision,
        vision_detail: missionvision.vision_detail,
      });
      setChannel({
        instagram_status: channel.sns_list.instagram_status,
        instagram: channel.sns_list.instagram,
        linked_in_status: channel.sns_list.linked_in_status,
        linked_in: channel.sns_list.linked_in,
        youtube_status: channel.sns_list.youtube_status,
        youtube: channel.sns_list.youtube,
        notion_status: channel.sns_list.notion_status,
        notion: channel.sns_list.notion,
        naver_blog_status: channel.sns_list.naver_blog_status,
        naver_blog: channel.sns_list.naver_blog,
        brunch_stroy_status: channel.sns_list.brunch_stroy_status,
        brunch_stroy: channel.sns_list.brunch_stroy,
        facebook_status: channel.sns_list.facebook_status,
        facebook: channel.sns_list.facebook,
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
