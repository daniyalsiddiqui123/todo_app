import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const TOKEN_COOKIE_NAME = 'auth_token';

export function setAuthCookie(token: string, res?: NextResponse): void {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict' as const,
    path: '/',
  };

  if (res) {
    res.cookies.set(TOKEN_COOKIE_NAME, token, cookieOptions);
  } else {
    cookies().set(TOKEN_COOKIE_NAME, token, cookieOptions);
  }
}

export function getAuthCookie(req?: NextRequest): string | undefined {
  if (req) {
    const tokenCookie = req.cookies.get(TOKEN_COOKIE_NAME);
    return tokenCookie?.value;
  }

  return cookies().get(TOKEN_COOKIE_NAME)?.value;
}

export function clearAuthCookie(res?: NextResponse): void {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0, // Expire immediately
    sameSite: 'strict' as const,
    path: '/',
  };

  if (res) {
    res.cookies.set(TOKEN_COOKIE_NAME, '', cookieOptions);
  } else {
    cookies().set(TOKEN_COOKIE_NAME, '', cookieOptions);
  }
}
