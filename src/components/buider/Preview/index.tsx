import React from "react";
import {
  Header,
  Footer,
  KeyVisual,
  MissionVision,
} from "@/components/buider/Widget";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function Preview() {
  // 위젯 목록 가져오기
  const { widgets, theme } = useStore();

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
      <Header theme={theme.theme} />

      {widgets.map((widget, index) => {
        return (
          <div key={index}>
            {widget.routerName === "builder/keyvisual" && widget.toggle ? (
              <KeyVisual />
            ) : null}
            {widget.routerName === "builder/missionvision" && widget.toggle ? (
              <MissionVision />
            ) : null}
          </div>
        );
      })}
      <Footer theme={theme.theme} />
    </div>
  );
}
