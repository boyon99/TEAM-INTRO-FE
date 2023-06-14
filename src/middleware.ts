import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";


    
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith("/")) {
        const { device } = userAgent(req);
        if (device.type === 'mobile') {
        return new Response("pc로 접속 해 주세요");
        }
    }
    if (req.headers.get('host') !== 'localhost:3000') {
        const subdomain = req.headers.get('host')?.split('.')[0];
        const newURL = new URL(`/subdomain/${subdomain}`, req.url);
        return NextResponse.rewrite(newURL);
    }
    
    
}

export const config = {
    matcher: '/',
  };
  