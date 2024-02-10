import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AuthService from "@/services/authService/authService";
import {locales} from "@/config";

function getLocale(request: NextRequest) {
    return 'en';
}

const handleAuthRequest =  async (request: NextRequest) => {
    const pathName = request.nextUrl.pathname;
    
    if (pathName.startsWith('/api/response')) {
        const headers = request.headers;
        const token = headers.get('token') ?? '';
        
        const isValid = await AuthService.getInstance().verifyToken(token);
        
        if (!isValid) {
            return NextResponse.json(
                { success: false, message: 'Authentication failed' },
                { status: 401 }
            )
        }
    }
}

const handleRedirectLocale = (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith('/api')) return;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    
    if (pathnameHasLocale) return NextResponse.next();
    
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}


export async function middleware(request: NextRequest) {
    await handleAuthRequest(request);
    
    return NextResponse.next();
}


export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        
        // Optional: only run on root (/) URL
        '/',
        '/(.*)'
    ],
}