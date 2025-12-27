"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
  FileText,
  Store,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth-store";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  permissions?: string[];
}

const navItems: NavItem[] = [
  {
    title: "Tổng quan",
    href: "/dashboard",
    icon: LayoutDashboard,
    permissions: ["DASHBOARD_VIEW"],
  },
  {
    title: "Đơn hàng",
    href: "/dashboard/orders",
    icon: ShoppingCart,
    permissions: ["ORDERS_VIEW"],
  },
  {
    title: "Sản phẩm",
    href: "/dashboard/products",
    icon: Package,
    permissions: ["PRODUCTS_VIEW"],
  },
  {
    title: "Khách hàng",
    href: "/dashboard/customers",
    icon: Users,
    permissions: ["CUSTOMERS_VIEW"],
  },
  {
    title: "Báo cáo",
    href: "/dashboard/reports",
    icon: FileText,
    permissions: ["REPORTS_VIEW"],
  },
  {
    title: "Người dùng",
    href: "/dashboard/users",
    icon: Users,
    permissions: ["USERS_VIEW"],
  },
  {
    title: "Cài đặt",
    href: "/dashboard/settings",
    icon: Settings,
    permissions: ["SETTINGS_VIEW"],
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { hasAnyPermission, permissions } = useAuthStore();

  const canAccessItem = (item: NavItem) => {
    // If no permissions required, show the item
    if (!item.permissions || item.permissions.length === 0) {
      return true;
    }
    // Check if user has any of the required permissions
    return hasAnyPermission(item.permissions);
  };

  const visibleItems = navItems.filter(canAccessItem);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6 dark:border-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
              <Store className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                KiotViet
              </h1>
              <p className="text-xs text-slate-500">Quản lý bán hàng</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {visibleItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 transition-transform group-hover:scale-110",
                      isActive ? "text-white" : "text-slate-500"
                    )}
                  />
                  <span className="flex-1">{item.title}</span>
                  {isActive && <ChevronRight className="h-4 w-4" />}
                </Link>
              );
            })}
          </nav>

          {/* User Permissions Debug (Development only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="border-t border-slate-200 p-4 dark:border-slate-800">
              <details className="text-xs">
                <summary className="cursor-pointer text-slate-500 hover:text-slate-700">
                  Debug: Permissions ({permissions.length})
                </summary>
                <div className="mt-2 max-h-32 overflow-y-auto rounded bg-slate-100 p-2 dark:bg-slate-800">
                  {permissions.map((p) => (
                    <div key={p} className="text-slate-600 dark:text-slate-400">
                      {p}
                    </div>
                  ))}
                </div>
              </details>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">
        <div className="flex items-center justify-around py-2">
          {visibleItems.slice(0, 5).map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs",
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

