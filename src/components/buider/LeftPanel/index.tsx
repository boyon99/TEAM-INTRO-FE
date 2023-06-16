import useStore from "@/store";
import React, { useState } from "react";
import { List, arrayMove } from "react-movable";
import Menu from "../Menu";

const widgets = ["헤더/푸터"];

export default function LeftPanal() {
  const { widgets, addWidget, removeWidget, setWidget } = useStore();

  return (
    <>
      {/* 테마 변경, 회사 정보 수정, 사이트 정보 수정 버튼*/}
      <div className="w-[100%] h-[185px]">
        <div className="w-[264px] h-[161px] mt-[24px] ml-[28px] border-b-[1px] border-GrayScalePrimary-400">
          <Menu routerName="/builder/changeTheme" buttonName={"테마 변경"} />
          <Menu
            routerName="/builder/changeCompany"
            buttonName={"회사 정보 수정"}
          />
          <Menu
            routerName="/builder/changeSite"
            buttonName={"사이트 정보 수정"}
          />
        </div>
      </div>
      {/* 위젯 추가 삭제 및 순서 변경 */}
      <div className="w-[100%] h-[calc(100%-185px)] overflow-y-scroll">
        <List
          values={widgets}
          onChange={({ oldIndex, newIndex }) =>
            setWidget(arrayMove(widgets, oldIndex, newIndex))
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{ padding: 0, cursor: isDragged ? "grabbing" : undefined }}
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                listStyleType: "none",
                cursor: isDragged ? "grabbing" : "grab",
                backgroundColor: isDragged || isSelected ? "#c2b6f0" : "#FFF",
              }}
              className="border w-[200px] ml-[30px] mt-[10px]"
            >
              {value}
            </li>
          )}
        />
      </div>
    </>
  );
}
