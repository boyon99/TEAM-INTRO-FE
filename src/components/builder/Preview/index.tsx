import React from 'react';
import {
  Header,
  Footer,
  KeyVisual,
  MissionVision,
  ProductService,
  TeamMember,
  ContactUs,
  Press,
  Download,
  History,
  TeamCulture,
  Result,
  Partners,
  Review,
  Channel,
  Patent,
} from '@/components/builder/Widget';
import useStore from '@/store';

export default function Preview() {
  // 위젯 목록 가져오기
  const { widgets, theme } = useStore();

  return (
    <div className="w-[945px] h-[calc(100vh-72px)] overflow-y-scroll">
      <div className="w-[908px] h-full mx-[auto] mt-[16px] border border-[2px] border-GrayScalePrimary-150">
        <Header theme={theme.theme} />
        {widgets.map((widget, index) => (
          <div key={index}>
            {widget.routerName === 'builder/keyvisual#w-01' && widget.toggle ? <KeyVisual theme={theme.theme} /> : null}
            {widget.routerName === 'builder/missionvision#w-02' && widget.toggle ? (
              <MissionVision theme={theme.theme} />
            ) : null}

            {widget.routerName === 'builder/productservice#w-03' && widget.toggle ? (
              <ProductService theme={theme.theme} />
            ) : null}
            {widget.routerName === 'builder/teammember#w-04' && widget.toggle ? (
              <TeamMember theme={theme.theme} />
            ) : null}
            {widget.routerName === 'builder/contactu#w-05' && widget.toggle ? <ContactUs theme={theme.theme} /> : null}
            {widget.routerName === 'builder/press#w-06' && widget.toggle ? <Press theme={theme.theme} /> : null}
            {widget.routerName === 'builder/download#w-07' && widget.toggle ? <Download theme={theme.theme} /> : null}
            {widget.routerName === 'builder/history#w-08' && widget.toggle ? <History theme={theme.theme} /> : null}
            {widget.routerName === 'builder/teamculture#w-09' && widget.toggle ? (
              <TeamCulture theme={theme.theme} />
            ) : null}
            {widget.routerName === 'builder/result#w-10' && widget.toggle ? <Result theme={theme.theme} /> : null}
            {widget.routerName === 'builder/partners#w-11' && widget.toggle ? <Partners theme={theme.theme} /> : null}
            {widget.routerName === 'builder/review#w-12' && widget.toggle ? <Review theme={theme.theme} /> : null}
            {widget.routerName === 'builder/channel#w-13' && widget.toggle ? <Channel theme={theme.theme} /> : null}
            {widget.routerName === 'builder/patent#w-14' && widget.toggle ? <Patent theme={theme.theme} /> : null}
          </div>
        ))}
        <Footer theme={theme.theme} />
      </div>
    </div>
  );
}
