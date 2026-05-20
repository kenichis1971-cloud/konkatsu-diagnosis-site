import { NextResponse } from "next/server";

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://konkatsu-diagnosis-site.vercel.app/sitemap.xml
`;

export function GET() {
  return new NextResponse(ROBOTS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
