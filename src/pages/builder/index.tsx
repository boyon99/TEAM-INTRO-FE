import EditBuilder from "@/components/buider/EditBuilder";
import Preview from "@/components/buider/Preview";
import React, { useState } from "react";

export default function Builder() {
  const [widgetList, setWidgetList] = useState(["Fitness", "Cta", "Timeline"]);
  console.log(widgetList);
  return (
    <>
      {/* topbar */}
      <div className="w-[1280px] h-[72px] border flex justify-between p-[16px]">
        <button className="w-[100px] h-[40px] border">대시보드</button>
        <div>질링스 회사 소개</div>
        <button className="w-[100px] h-[40px] border">게시하기</button>
      </div>
      {/* builder */}
      <div className="flex">
        <EditBuilder widgetList={widgetList} setWidgetList={setWidgetList} />
        <Preview widgetList={widgetList} />
      </div>
    </>
  );
}
