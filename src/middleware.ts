import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";


    
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith("/")) {
        const { device } = userAgent(req);
        if (device.type === 'mobile') {
        return new Response("모바일 버전은 개발중 입니다. pc로 접속 해 주세요");
        }
    }
 
    
}