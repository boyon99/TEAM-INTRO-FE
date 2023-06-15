import EditBuilder from "@/components/buider/EditBuilder";
import Preview from "@/components/buider/Preview";
import useStore from "@/store";
import React, { useState } from "react";

export default function Builder() {
  const { widgets, addWidget, removeWidget } = useStore();
  return (
    <>
      {/* topbar */}
      <button onClick={() => addWidget(["Fitness", "Cta", "Timeline"])}>
        add
      </button>
      <div className="w-[1280px] h-[72px] border flex justify-between p-[16px]">
        <button className="w-[100px] h-[40px] border">대시보드</button>
        <div>질링스 회사 소개</div>
        <button className="w-[100px] h-[40px] border">게시하기</button>
      </div>
      {/* builder */}
      <div className="flex">
        <EditBuilder />
        <Preview />
      </div>
    </>
  );
}
