import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  await fetch('https://api.counterapi.dev/v2/anton-siligans-team-2693/affiliate-clicks/up');

  return NextResponse.redirect(new URL('/dashboard', request.url));
};
