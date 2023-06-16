import useStore from "@/store";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { List, arrayMove } from "react-movable";

export default function EditBuilder() {
  const { widgets, addWidget, removeWidget, setWidget } = useStore();
  const router = useRouter();

  return (
    <>
      {/* 테마 변경, 회사 정보 수정, 사이트 정보 수정 */}
      <div className="w-[100%] h-[185px]">
        <div className="w-[264px] h-[161px] mt-[24px] ml-[28px] border-b-[1px] border-GrayScalePrimary-400">
          <button onClick={() => router.push("/builder/changeTheme")}>
            테마 변경
          </button>
        </div>
      </div>
      {/* 위젯 제거 및 순서 변경 */}
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
