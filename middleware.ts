import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const internalDays = /^\/days-from-today\/(\d+)\/?$/.exec(pathname);
  if (internalDays) {
    return NextResponse.redirect(new URL(`/${internalDays[1]}-days-from-today`, request.url), 308);
  }

  const internalHoliday = /^\/days-until-holiday\/([a-z0-9-]+)\/?$/.exec(pathname);
  if (internalHoliday) {
    return NextResponse.redirect(new URL(`/days-until-${internalHoliday[1]}`, request.url), 308);
  }

  const daysPublic = /^\/(\d+)-days-from-today\/?$/.exec(pathname);
  if (daysPublic) {
    const url = request.nextUrl.clone();
    url.pathname = `/days-from-today/${daysPublic[1]}`;
    return NextResponse.rewrite(url);
  }

  const holidayPublic = /^\/days-until-([a-z0-9-]+)\/?$/.exec(pathname);
  if (holidayPublic) {
    const url = request.nextUrl.clone();
    url.pathname = `/days-until-holiday/${holidayPublic[1]}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals, API routes, and typical static asset paths.
     */
    "/((?!api|_next|favicon.ico|.*\\..*).*)",
  ],
};
