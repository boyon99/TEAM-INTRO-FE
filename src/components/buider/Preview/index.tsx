import React from "react";
import { Timeline, Cta, Fitness } from "@/components/buider/Widget";

export default function Preview({ widgetList }: { widgetList: string[] }) {
  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
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
