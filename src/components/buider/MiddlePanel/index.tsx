import React from "react";
import { Timeline, Cta, Fitness } from "@/components/buider/Widget";

export default function MiddlePanel({ widgetList }: { widgetList: string[] }) {
  return (
    <div className="border w-[620px] h-[600px] ml-[30px] mt-[24px]">
      {widgetList.map((widget, index) => {
        return (
          <div key={index} className="border w-[100%] h-[50px] mb-[10px]">
            {widget === "Timeline" && <Timeline />}
            {widget === "Cta" && <Cta />}
            {widget === "Fitness" && <Fitness />}
          </div>
        );
      })}
    </div>
  );
}
