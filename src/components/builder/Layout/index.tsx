import { BeforeButtonLarge, PrimaryButton } from '@/components/common/button';
import { ToggleInText } from '@/components/common/toggle';
import React from 'react';
import Preview from '../Preview';
import useStore from '@/store';
import { useMutation } from '@tanstack/react-query';
import { updateIntroPage } from '@/apis/builder';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { widgets, isPublicToggle } = useStore();
  const widget_status_list = widgets.map((widget) => {
    return widget.toggle;
  });
  const order_list = widgets.map((widget) => {
    return widget.widget_id;
  });
  const { mutate: updateIntroPageMutation } = useMutation(
    () => updateIntroPage({ status: isPublicToggle, widget_status_list: widget_status_list, order_list: order_list }),
    {
      onSuccess: (data) => {
        console.log('success', data);
        alert('저장되었습니다.');
      },
      onError: (error) => {
        console.log('error', error);
        alert('저장에 실패하였습니다.');
      },
    },
  );

  return (
    <>
      {/* topbar */}
      <div className="w-[1280px] h-[72px] border-b-[2px] border-GrayScalePrimary-400 flex">
        <BeforeButtonLarge pageName="대시보드" classname="my-[auto] ml-[22px] w-[232px]" />
        <div className="text-center w-[240px] h-[44px] ml-[266px] my-[auto] text-GrayScalePrimary-500">
          <p className="font-[500] text-[14px]">질링스 회사 소개</p>
          <p className="text-[12px] font-[400]">zillinks.com/corp/zillinks</p>
        </div>
        <ToggleInText classname="w-[90px] h-[32px] my-[auto] ml-[293px]" />
        <PrimaryButton
          type="primary"
          text={'게시하기'}
          onClick={() => {
            updateIntroPageMutation();
          }}
          classname={'w-[89px] h-[36px] my-[auto] ml-[16px]'}
        />
      </div>
      <div className="flex">
        {/* leftpanel */}
        <div className="w-[336px] h-[calc(100vh-72px)] overflow-y-scroll">{children}</div>
        {/* preview */}
        <Preview />
      </div>
    </>
  );
}
