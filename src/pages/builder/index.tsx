import React, { useState } from "react";
import Layout from "@/components/buider/Layout";
import LeftPanal from "@/components/buider/LeftPanel";

export default function Builder() {
  return (
    <>
      <Layout>{<LeftPanal />}</Layout>
    </>
  );
}
