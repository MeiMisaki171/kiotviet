import { auth } from "@/auth";

export default auth;

export const config = {
  // Chỉ apply middleware cho các routes cần protect
  // Exclude: api, _next, static files, và public pages (home)
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|home).*)",
  ],
};
