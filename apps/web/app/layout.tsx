import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/providers/session-provider";
import { UserPermissionsProvider } from "@/providers/user-permissions-provider";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "KiotViet - Quản lý bán hàng",
  description: "Hệ thống quản lý bán hàng KiotViet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <SessionProvider>
          <UserPermissionsProvider>
            {children}
            <Toaster />
          </UserPermissionsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

