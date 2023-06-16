import React from "react";
import { Timeline, Cta, Fitness } from "@/components/buider/Widget";
import useStore from "@/store";

export default function Preview() {
  const { widgets, setWidget } = useStore();

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
      {widgets.map((widget, index) => {
        return (
          <div key={index} className="border w-[100%] h-[50px] mb-[10px]">
            {widget.name === "헤더/푸터" && <Timeline />}
            {widget.name === "키비주얼/슬로건" && <Cta />}
            {widget.name === "미션/비젼" && <Fitness />}
            {/* {widget.name === "제품/서비스 소개" && <Fitness />}
            {widget.name === "팀 멤버" && <Fitness />}
            {widget.name === "컨택어스" && <Fitness />}
            {widget.name === "보도자료" && <Fitness />}
            {widget.name === "다운로드" && <Fitness />}
            {widget.name === "연혁" && <Fitness />}
            {widget.name === "팀 문화" && <Fitness />}
            {widget.name === "핵심 성과" && <Fitness />}
            {widget.name === "파트너스" && <Fitness />}
            {widget.name === "고객리뷰" && <Fitness />}
            {widget.name === "채널" && <Fitness />}
            {widget.name === "특허/인증" && <Fitness />} */}
          </div>
        );
      })}
    </div>
  );
}
