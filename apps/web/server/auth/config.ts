import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Demo users for testing
const DEMO_USERS = [
  {
    id: "1",
    email: "admin@kiotviet.vn",
    password: "admin123",
    name: "Admin User",
    roles: ["ADMIN"],
    permissions: [
      "DASHBOARD_VIEW",
      "USERS_VIEW",
      "USERS_CREATE",
      "USERS_EDIT",
      "USERS_DELETE",
      "SETTINGS_VIEW",
      "SETTINGS_EDIT",
      "REPORTS_VIEW",
    ],
  },
  {
    id: "2",
    email: "user@kiotviet.vn",
    password: "user123",
    name: "Normal User",
    roles: ["USER"],
    permissions: ["DASHBOARD_VIEW", "REPORTS_VIEW"],
  },
];

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // BYPASS MODE: Cho phép đăng nhập với bất kỳ email/password
        // TODO: Thay thế bằng API auth thực khi có
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const name = email.split("@")[0];

        // Bypass: Trả về user với full permissions
        return {
          id: "bypass-user-" + Date.now(),
          email: email,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          roles: ["ADMIN"],
          permissions: [
            "DASHBOARD_VIEW",
            "USERS_VIEW",
            "USERS_CREATE",
            "USERS_EDIT",
            "USERS_DELETE",
            "SETTINGS_VIEW",
            "SETTINGS_EDIT",
            "REPORTS_VIEW",
          ],
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days for Remember Me
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email!;
        token.name = user.name!;
        token.roles = user.roles;
        token.permissions = user.permissions;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as string[];
        session.user.permissions = token.permissions as string[];
      }
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;
      
      // Public routes - không cần auth
      const publicRoutes = ["/home", "/sign-in", "/"];
      const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith("/home"));

      // Protected routes - cần auth  
      const isOnDashboard = pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect to sign-in
      }

      if (pathname === "/sign-in" && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Allow all public routes
      return true;
    },
  },
};

