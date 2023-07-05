import { user } from "@/apis/auth";
import { getCookie } from "@/utils/cookies";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type authType = 'PENDING' | 'SUCCESS' | 'FAILED'

export function useUser() {
  const token = getCookie('access_token')
  const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING')
  const verifyResult = useQuery(['auth', 'verify'], user, {
    onSuccess: () => {
      setIsAuthenticated('SUCCESS')
    },
    onError: () => {
      setIsAuthenticated('FAILED')
    },
    retry: 0, // 실패했더라도 다시 요청하지 않음
    enabled: !!token , // 토큰이 있을 때만 verify
  }) // 쿠키가 없으면 undefined 라서, boolean 타입으로 변환하기 위해 !! 사용

  return isAuthenticated // 인증 여부 값을 리턴해서 사용
}

export function ProtectedRouter() {
  const isAuthenticated = useUser() 
  const token = getCookie('access_token')
  const router = useRouter();

  useEffect(() => {
    if ((!token && router.pathname !== '/register') && (!token && router.pathname !== '/findid')
     && (!token && router.pathname !== '/findpass') && (!token && router.pathname !== '/subdomain/[id]')
      || isAuthenticated === 'FAILED' ) {
      // 토큰이 없거나, 인증 실패 시 그리고 /register, /findid, /findpass 아닐시 로그인 페이지로
      
      router.replace("/login");
    }
    else if((isAuthenticated === 'SUCCESS' && router.pathname === '/login') || (isAuthenticated === 'SUCCESS' && router.pathname === '/')
     || (isAuthenticated === 'SUCCESS' && router.pathname === '/findid') || (isAuthenticated === 'SUCCESS' && router.pathname === '/findpass')
      || (isAuthenticated === 'SUCCESS' && router.pathname === '/register')) {
      router.replace("/dashboard/main")
  } 

  }, [isAuthenticated])

  
}

export default ProtectedRouter

      