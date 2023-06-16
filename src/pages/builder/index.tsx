import EditBuilder from "@/components/buider/EditBuilder";
import Preview from "@/components/buider/Preview";
import TopBar from "@/components/buider/TopBar";
import { BeforeButtonLarge, PrimaryButton } from "@/components/common/button";
import { Toggle } from "@/components/common/toggle";
import React, { useState } from "react";

export default function Builder() {
  return (
    <>
      <TopBar>{<EditBuilder />}</TopBar>
    </>
  );
}
