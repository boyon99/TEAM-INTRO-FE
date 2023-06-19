import React, { useState } from 'react';
import Layout from '@/components/builder/Layout';
import LeftPanal from '@/components/builder/LeftPanel';

export default function Builder() {
  return (
    <>
      <Layout>{<LeftPanal />}</Layout>
    </>
  );
}
