import React from 'react';
import { Header, Footer, KeyVisual, MissionVision } from '@/components/builder/Widget';
import useStore from '@/store';

export default function Preview() {
  // 위젯 목록 가져오기
  const { widgets, theme } = useStore();

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)] overflow-y-scroll">
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      <Header theme={theme.theme} />
      {widgets.map((widget, index) => {
        return (
          <div key={index}>
            {widget.routerName === 'builder/keyvisual#w-02' && widget.toggle ? <KeyVisual theme={theme.theme} /> : null}
            {widget.routerName === 'builder/missionvision#w-03' && widget.toggle ? (
              <MissionVision theme={theme.theme} />
            ) : null}
          </div>
        );
      })}
      <Footer theme={theme.theme} />
    </div>
  );
}
