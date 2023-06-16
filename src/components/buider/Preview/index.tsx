import React from "react";
import {
  HeaderFooter,
  KeyVisual,
  MissionVision,
} from "@/components/buider/Widget";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function Preview() {
  // 위젯 목록 가져오기
  const { widgets } = useStore();
  // 현재 경로 가져오기
  const router = useRouter();
  const currentPath = router.asPath;
  // 모든 미리보기 위젯을 보여주는 경로 리스트
  const allPreview = [
    "/builder/changeTheme",
    "/builder",
    "/builder/changeCompany",
    "/builder/changeSite",
  ];

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
      {allPreview.includes(currentPath) ? (
        // 모든 미리보기 위젯을 보여주는 경로 리스트에 포함되어 있으면
        widgets.map((widget, index) => {
          return (
            <div key={index}>
              {widget.routerName === "builder/headerfooter" && <HeaderFooter />}
              {widget.routerName === "builder/keyvisual" && <KeyVisual />}
              {widget.routerName === "builder/missionvision" && (
                <MissionVision />
              )}
            </div>
          );
        })
      ) : (
        // 특정 위젯만 보여주는 경로 리스트에 포함되어 있으면
        <>
          {currentPath === "/builder/headerfooter" ? <HeaderFooter /> : <></>}
          {currentPath === "/builder/keyvisual" ? <KeyVisual /> : <></>}
          {currentPath === "/builder/missionvision" ? <MissionVision /> : <></>}
        </>
      )}
    </div>
  );
}
