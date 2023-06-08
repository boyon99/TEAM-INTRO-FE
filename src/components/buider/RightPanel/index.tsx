import React, { useState } from "react";
import { List, arrayMove } from "react-movable";

export default function RightPanel({
  widgetList,
  setWidgetList,
}: {
  widgetList: string[];
  setWidgetList: Function;
}) {
  return (
    <div className="border w-[260px] h-[600px] ml-[30px] mt-[24px]">
      <div className="bg-primary-200 w-[100%] h-[30px]">적용 중인 위젯</div>
      {/* 위젯 제거 및 순서 변경 */}
      <List
        values={widgetList}
        onChange={({ oldIndex, newIndex }) =>
          setWidgetList(arrayMove(widgetList, oldIndex, newIndex))
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
  );
}
