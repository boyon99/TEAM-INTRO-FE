import React, { useState } from "react";
import Dragg from "../Draggable";

export default function RightPanel() {
  return (
    <div className="border w-[260px] h-[600px] ml-[30px] mt-[24px]">
      적용 중인 위젯
      <Dragg />
    </div>
  );
}
