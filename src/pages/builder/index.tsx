import EditBuilder from "@/components/buider/EditBuilder";
import Preview from "@/components/buider/Preview";
import { BeforeButtonLarge, PrimaryButton } from "@/components/common/button";
import { Toggle } from "@/components/common/toggle";
import React, { useState } from "react";

export default function Builder() {
  return (
    <>
      {/* topbar */}
      <div className="w-[1280px] h-[72px] border-b-2 border-GrayScalePrimary-400 mb-[10px] flex">
        <BeforeButtonLarge
          nowPageName="대시보드"
          classname="my-[auto] ml-[22px] w-[232px]"
        />
        <div className="text-center w-[240px] h-[44px] ml-[266px] my-[auto] text-GrayScalePrimary-500">
          <p className="font-[500] text-[14px]">질링스 회사 소개</p>
          <p className="text-[12px] font-[400]">zillinks.com/corp/zillinks</p>
        </div>
        <Toggle classname="w-[90px] h-[32px] my-[auto] ml-[293px]" />
        <PrimaryButton
          color={500}
          text={"게시하기"}
          onClick={() => {}}
          classname={"w-[89px] h-[36px] my-[auto] ml-[16px]"}
        />
      </div>
      {/* builder */}
      <div className="flex">
        <EditBuilder />
        <Preview />
      </div>
    </>
  );
}
