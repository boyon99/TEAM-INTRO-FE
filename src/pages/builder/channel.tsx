import EditBuilder from '@/components/builder/LeftPanel';
import Layout from '@/components/builder/Layout';
import React, { useState } from 'react';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { ToggleWidget } from '@/components/common/toggle';
import { BuilderCheckbox, BuilderInput, BuilderTextarea, BuilderUploadImage } from '@/components/common/input';
import useStore from '@/store';
import { channel } from 'diagnostics_channel';

function Preview() {
  const { widgets, setToggle, channel } = useStore();
  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 채널" />
      <div className="font-[700] text-[24px] mt-[16px] flex">
        <img
          src="/chat-sleep-outline.png"
          alt="header/chat-sleep-outline logo img"
          className="w-[26px] h-[26px] mr-[4px] translate-y-1"
        />
        채널
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        회사에서 운영하는 고객과의 소통 채널들을 등록해주세요. 현재 활발하게 운영하는 채널들만 보여주세요.
      </div>
      {/* 사용여부 */}
      <div className="mt-[48px] mb-[10px] font-[700] text-[14px] text-GrayScalePrimary-700">사용 여부</div>
      <ToggleWidget
        toggle={widgets[12].toggle}
        setWidgetToggle={setToggle}
        widgetName="채널"
        toggleText={{ true: '사용', false: '사용 안함' }}
      />
      {widgets[12].toggle ? (
        <>
          {/* SNS 채넣 */}
          <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">SNS 채널</div>
          {channel.channelList.map((item, index) => {
            return <BuilderCheckbox list={item} setValue={channel.setValue} setChecked={channel.setChecked} />;
          })}
        </>
      ) : (
        <></>
      )}

      {/* 저장하기 */}
      <PrimaryButton
        inputType="submit"
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}
export default function MissionVision() {
  return (
    <div>
      <Layout>{<Preview />}</Layout>
    </div>
  );
}
