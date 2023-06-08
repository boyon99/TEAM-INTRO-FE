import LeftPanel from "@/components/buider/LeftPanel";
import MainColor from "@/components/buider/MainColor";
import MiddlePanel from "@/components/buider/MiddlePanel";
import RightPanel from "@/components/buider/RightPanel";
import TopBar from "@/components/buider/TopBar";
import React, { useState } from "react";

export default function Builder() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
      </div>
    </>
  );
}
