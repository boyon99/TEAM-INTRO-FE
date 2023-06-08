import React, { useState } from "react";
import { List, arrayMove } from "react-movable";

export default function RightPanel() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div className="border w-[260px] h-[600px] ml-[30px] mt-[24px]">
      적용 중인 위젯
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
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
