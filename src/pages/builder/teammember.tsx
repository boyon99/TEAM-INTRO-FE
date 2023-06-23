import Layout from '@/components/builder/Layout';
import useStore from '@/store';
import React from 'react'

function TeamMemberView() {
  return (
    <div>teammember</div>
  )
}
function TeamMemberAdd() {
  return (
    <div>teammember</div>
  )
}



export default function TeamMember() {
    const { add } = useStore();
    return (
      <div>
        {add ? <Layout>{<TeamMemberAdd />}</Layout> : <Layout>{<TeamMemberView />}</Layout>}
        
      </div>
    );
  }