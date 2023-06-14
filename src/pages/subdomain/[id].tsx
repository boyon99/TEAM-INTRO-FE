import { useRouter } from 'next/router'
// import React from 'react'

function SubDomain() {
    const router = useRouter()
    console.log(router)
  return (
    <div>
      <span>안녕하세요{router.query.id}</span>
    </div>
  )
}

export default SubDomain