import EditBuilder from '@/components/builder/LeftPanel';
import Layout from '@/components/builder/Layout';
import React, { useState } from 'react';
import useStore from '@/store';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { ToggleWidget } from '@/components/common/toggle';

function Preview() {
  const { headerfooter } = useStore();

  return (
    <form className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 키비주얼/슬로건" />
      <div className="font-[700] text-[24px] mt-[16px] flex">
        <img
          src="/keyvisual.png"
          alt="header/keyvisual logo img"
          className="w-[26px] h-[26px] mr-[4px] translate-y-1"
        />
        키 비주얼/슬로건
      </div>
      {/* 사용여부 */}
      <div className="mt-[20px] mb-[10px] font-[700] text-[14px] text-GrayScalePrimary-700">사용 여부</div>
      <ToggleWidget
        toggle={headerfooter.lowerMenuToggle}
        setToggle={headerfooter.setLowerMenuToggle}
        toggleText={{ true: '사용', false: '사용 안함' }}
      />
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        회사를 대표하는 이미지와 회사가 제공하는 것을 한 문장으로 요약하는 헤드라인을 작성해주세요. 평범하고 심플한
        문장으로 전달력을 높여주세요.
      </div>
      {/* 상단 메뉴 */}
      <div className="mt-[48px] font-[700] text-[18px] text-GrayScalePrimary-700">상단 메뉴</div>
      <div className="mt-[20px] mb-[10px] font-[700] text-[14px] text-GrayScalePrimary-700">퀵 메뉴</div>
      <div className="flex flex-row w-[264px] flex-wrap">
        {headerfooter.quickmenu.map((widget, index) => {
          return (
            <button
              key={index}
              className={
                'text-[14px] rounded-[8px] border-[2px] text-center cursor-pointer h-[32px] mr-[7px] text-[14px] pl-[10px] pr-[8px] mb-[10px] flex ' +
                (widget.toggle
                  ? 'bg-primary-500 text-white border-primary-500 '
                  : 'bg-white text-primary-500 border-primary-500 text-primary-500')
              }
              onClick={() => {
                headerfooter.setQuickMenuToggle(widget.name);
              }}
            >
              <span className="translate-y-[4px]">{widget.name}</span>
              <img
                src={widget.toggle ? '/visibility.png' : '/visibility_off.png'}
                className="w-[16px] h-[16px] translate-y-[6px] ml-[4px]"
              />
            </button>
          );
        })}
      </div>
      {/* 저장하기 */}
      <PrimaryButton
        inputType="submit"
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </form>
  );
}

export default function KeyVisual() {
  return (
    <div>
      <Layout>{<Preview />}</Layout>
    </div>
  );
}
