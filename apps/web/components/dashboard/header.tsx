"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Search,
  LogOut,
  User,
  Settings,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    roles: string[];
  };
}

export function DashboardHeader({ user }: HeaderProps) {
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 lg:px-6">
      {/* Left Side - Mobile Menu & Search */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Tìm kiếm..."
              className="w-64 border-slate-200 bg-slate-50 pl-10 focus:bg-white dark:border-slate-700 dark:bg-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Notifications & User Menu */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-slate-600 hover:text-slate-900"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </Button>

        {/* User Menu */}
        <div className="relative">
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-2"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-medium text-white">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div className="hidden text-left md:block">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {user.name}
              </p>
              <p className="text-xs text-slate-500">{user.roles?.join(", ")}</p>
            </div>
            <ChevronDown className="hidden h-4 w-4 text-slate-500 md:block" />
          </Button>

          {/* Dropdown Menu */}
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-700">
                  <p className="font-medium text-slate-900 dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>

                <div className="py-2">
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                    <User className="h-4 w-4" />
                    Hồ sơ cá nhân
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                    <Settings className="h-4 w-4" />
                    Cài đặt
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-2 dark:border-slate-700">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <LogOut className="h-4 w-4" />
                    Đăng xuất
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

