import LeftPanel from "@/components/buider/LeftPanel";
import MainColor from "@/components/buider/MainColor";
import MiddlePanel from "@/components/buider/MiddlePanel";
import RightPanel from "@/components/buider/RightPanel";
import TopBar from "@/components/buider/TopBar";
import React, { useState } from "react";

export default function Builder() {
  const [widgetList, setWidgetList] = useState(["Fitness", "Cta", "Timeline"]);
  console.log(widgetList);
  return (
    <>
      <TopBar />
      <div className="flex">
        <LeftPanel widgetList={widgetList} setWidgetList={setWidgetList} />
        <MiddlePanel widgetList={widgetList} />
        <RightPanel widgetList={widgetList} setWidgetList={setWidgetList} />
      </div>
    </>
  );
}
