import React, { useEffect } from 'react';
import Layout from '@/components/builder/Layout';
import LeftPanel from '@/components/builder/LeftPanel';
import { useQuery } from '@tanstack/react-query';
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
    setDownload,
    setIsPublicToggle,
    setWidget,
    setProducts,
    setTeamMember,
    setHistorys,
    setNews,
  } = useStore();

  useEffect(() => {
    if (!isLoading && builderData?.widgets) {
      const widgetData = builderData.widgets.map((widget: any) => ({
        widget_id: widget.widget_type,
        toggle: widget.widget_status,
        order_list: widget.order,
      }));

      setHeaderAndFooterList(builderData.header_and_footer.header_and_footer_status_list);
      setCompanyInfo(builderData.company_info);
      setSiteInfo(builderData.site_info);
      setTheme({ theme_type: builderData.theme.type, color: builderData.theme.color });

      const keyvisual = builderData.widgets.find((widget: any) => widget.widget_type === 5);
      if (keyvisual) {
        setKeyVisual({
          background: keyvisual.background ?? '',
          slogan: keyvisual.slogan ?? '',
          filter: keyvisual.filter ?? '',
          slogan_detail: keyvisual.slogan_detail ?? '',
        });
      }

      const missionvision = builderData.widgets.find((widget: any) => widget.widget_type === 1);
      if (missionvision) {
        setMissionVision({
          mission: missionvision.mission,
          mission_detail: missionvision.mission_detail,
          vision: missionvision.vision,
          vision_detail: missionvision.vision_detail,
        });
      }

      const channel = builderData.widgets.find((widget: any) => widget.widget_type === 14);
      if (channel && channel.sns_list) {
        const sns_list = channel.sns_list;
        setChannel({
          instagram_status: sns_list.instagram_status ?? false,
          instagram: sns_list.instagram ?? '',
          linked_in_status: sns_list.linked_in_status ?? false,
          linked_in: sns_list.linked_in ?? '',
          youtube_status: sns_list.youtube_status ?? false,
          youtube: sns_list.youtube ?? '',
          notion_status: sns_list.notion_status ?? false,
          notion: sns_list.notion ?? '',
          naver_blog_status: sns_list.naver_blog_status ?? false,
          naver_blog: sns_list.naver_blog ?? '',
          brunch_stroy_status: sns_list.brunch_stroy_status ?? false,
          brunch_stroy: sns_list.brunch_stroy ?? '',
          facebook_status: sns_list.facebook_status ?? false,
          facebook: sns_list.facebook ?? '',
        });
      }

      const download = builderData.widgets.find((widget: any) => widget.widget_type === 12);
      if (download) {
        setDownload({
          description: download.description ?? '',
          intro_file: download.intro_file ?? '',
          media_kit_file: download.media_kit_file ?? '',
        });
      }

      setIsPublicToggle(builderData.intro_page_status === 'PUBLIC');
      setWidget(widgetData);

      const products = builderData.widgets.find((widget: any) => widget.widget_type === 2);
      if (products) {
        const updatedProducts = products.products_and_services_elements.map((item: any, index: number) => {
          if (index === products.length - 1) {
            return {
              ...item,
              products_and_services_element_id: item.products_and_services_element_id,
              order: item.order,
              name: item.name,
              title: item.title,
              description: item.description,
              image: item.image,
            };
          }
          return item;
        });
        setProducts(updatedProducts);
      }

      const teammembers = builderData.widgets.find((widget: any) => widget.widget_type === 6);
      if (teammembers) {
        const updatedTeamMembers = teammembers.team_member_elements.map((item: any, index: number) => {
          if (index === teammembers.length - 1) {
            return {
              ...item,
              team_member_element_id: item.team_member_element_id,
              order: item.order,
              profile: item.profile,
              group: item.group,
              name: item.name,
              position: item.position,
              tagline: item.tagline,
              email: item.email,
              sns_status: item.sns_status,
            };
          }
          return item;
        });
        setTeamMember(updatedTeamMembers);
      }

      const historys = builderData.widgets.find((widget: any) => widget.widget_type === 9);
      if (historys && historys.history_elements) {
        const updatedHistorys = historys.history_elements.map((item: any, index: number) => {
          if (index === historys.length - 1) {
            return {
              ...item,
              history_element_id: item.history_element_id,
              date: item.date,
              description: item.description,
              title: item.title,
              image: item.image,
            };
          }
          return item;
        });
        setHistorys(updatedHistorys);
      }

      const news = builderData.widgets.find((widget: any) => widget.widget_type === 11);
      if (news && news.news_elements) {
        const updatedNews = news.news_elements.map((item: any, index: number) => {
          if (index === news.length - 1) {
            return {
              ...item,
              news_element_id: item.news_element_id,
              order: item.order,
              date: item.date,
              description: item.description,
              title: item.title,
              image: item.image,
              press: item.press,
            };
          }
          return item;
        });
        setNews(updatedNews);
      }
    }
  }, [builderData, isLoading]);

  useEffect(() => {
    resetUploadImage();
    setIsPublicToggle(false);
  }, []);

  return (
    <>
      <Layout>
        <LeftPanel />
      </Layout>
    </>
  );
}
