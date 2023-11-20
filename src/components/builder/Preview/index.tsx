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
  const { widgets, theme, header_and_footer_status_list } = useStore();

  return (
    <div className="w-[945px] h-[calc(100vh-72px)] overflow-y-scroll">
      <div className="w-[908px] h-[auto] mx-[auto] mt-[16px] border border-[2px] border-GrayScalePrimary-150">
        {/* 헤더 */}
        <Header theme={theme.theme_type} />
        {/* 위젯 */}
        {widgets.map((widget, index) => (
          <div key={index}>
            {widget.widget_id === 5 && widget.toggle ? <KeyVisual theme={theme.theme_type} /> : null}
            {widget.widget_id === 1 && widget.toggle ? <MissionVision theme={theme.theme_type} /> : null}

            {widget.widget_id === 2 && widget.toggle ? <ProductService theme={theme.theme_type} /> : null}
            {widget.widget_id === 6 && widget.toggle ? <TeamMember theme={theme.theme_type} /> : null}
            {widget.widget_id === 3 && widget.toggle ? <ContactUs theme={theme.theme_type} /> : null}
            {widget.widget_id === 11 && widget.toggle ? <Press theme={theme.theme_type} /> : null}
            {widget.widget_id === 12 && widget.toggle ? <Download theme={theme.theme_type} /> : null}
            {widget.widget_id === 9 && widget.toggle ? <History theme={theme.theme_type} /> : null}
            {widget.widget_id === 7 && widget.toggle ? <Result theme={theme.theme_type} /> : null}
            {widget.widget_id === 14 && widget.toggle ? <Channel theme={theme.theme_type} /> : null}
          </div>
        ))}
        {/* 푸터 */}
        {header_and_footer_status_list[12] ? <Footer theme={theme.theme_type} /> : null}
      </div>
    </div>
  );
}
