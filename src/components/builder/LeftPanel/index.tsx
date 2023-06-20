import useStore from '@/store';
import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { MenuA, MenuB } from '../Menu';
import { ToggleLarge } from '@/components/common/toggle';

export default function LeftPanal() {
  // 위젯 목록과 위젯 순서 변경을 위한 함수
  const { widgets, setWidget } = useStore();
  return (
    <>
      {/* 테마 변경, 회사 정보 수정, 사이트 정보 수정 버튼 */}
      <div className="w-full h-[185px]">
        <div className="w-[264px] h-[161px] mt-[24px] ml-[28px] border-b-[1px] border-GrayScalePrimary-400">
          <MenuA routerName="/builder/changeTheme" buttonName={'테마 변경'} />
          <MenuA routerName="/builder/changeCompany" buttonName={'회사 정보 수정'} />
          <MenuA routerName="/builder/changeSite" buttonName={'사이트 정보 수정'} />
        </div>
      </div>
      {/* 위젯 사용 여부와 순서 변경 */}
      <div className="w-full h-[calc(100%-185px)] overflow-y-scroll pl-[24px]">
        {/* 순서 변경 토글 */}
        <div className="ml-[130px] mb-[10px]">
          <ToggleLarge toggleText="순서 변경"></ToggleLarge>
        </div>
        {/* 필수 위젯 */}
        <MenuB buttonName={'헤더/푸터'} routerName={'builder/headerfooter#w-15'} isEssential={true} />
        {/* 선택 위젯 */}
        {/* react-movable 라이브러리 사용하여 위젯 순서 변경 */}
        <List
          values={widgets}
          onChange={({ oldIndex, newIndex }) => setWidget(arrayMove(widgets, oldIndex, newIndex))}
          renderList={({ children, props, isDragged }) => (
            <ul {...props} style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}>
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                listStyleType: 'none',
                cursor: isDragged ? 'grabbing' : 'grab',
                border: isDragged ? '2px solid #4B48DF' : 'none',
              }}
              className={'w-[268px] h-[49px] mb-[6px]'}
            >
              <MenuB buttonName={value.name} routerName={value.routerName} isEssential={false} />
            </li>
          )}
        />
      </div>
    </>
  );
}
