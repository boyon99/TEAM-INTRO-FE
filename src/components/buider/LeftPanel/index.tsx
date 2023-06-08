import React from "react";

export default function LeftPanel({
  widgetList,
  setWidgetList,
}: {
  widgetList: string[];
  setWidgetList: Function;
}) {
  return (
    <div className="border w-[260px] h-[600px] ml-[40px] mt-[24px]">
      <div className="bg-primary-200 w-[100%] h-[30px]">위젯 추가</div>
    </div>
  );
}
