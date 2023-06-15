import React from "react";
import { Timeline, Cta, Fitness } from "@/components/buider/Widget";
import useStore from "@/store";

export default function Preview() {
  const { widgets, addWidget, removeWidget, setWidget } = useStore();

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
      {widgets.map((widget, index) => {
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
