"use client";

import { useAuthStore } from "@/stores/auth-store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Edit, Trash2, Shield } from "lucide-react";

const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@kiotviet.vn",
    role: "ADMIN",
    status: "active",
  },
  {
    id: "2",
    name: "Normal User",
    email: "user@kiotviet.vn",
    role: "USER",
    status: "active",
  },
  {
    id: "3",
    name: "Manager",
    email: "manager@kiotviet.vn",
    role: "MANAGER",
    status: "active",
  },
  {
    id: "4",
    name: "Staff 1",
    email: "staff1@kiotviet.vn",
    role: "STAFF",
    status: "inactive",
  },
];

export default function UsersPage() {
  const { hasPermission } = useAuthStore();

  const canCreate = hasPermission("USERS_CREATE");
  const canEdit = hasPermission("USERS_EDIT");
  const canDelete = hasPermission("USERS_DELETE");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Quản lý người dùng
          </h1>
          <p className="text-slate-500">Quản lý tài khoản người dùng hệ thống</p>
        </div>
        {canCreate && (
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
            <Plus className="mr-2 h-4 w-4" />
            Thêm người dùng
          </Button>
        )}
      </div>

      <Card className="border-none bg-white shadow-md dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Danh sách người dùng
          </CardTitle>
          <CardDescription>
            {mockUsers.length} người dùng trong hệ thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-500">
                    Người dùng
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-500">
                    Vai trò
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-500">
                    Trạng thái
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-slate-500">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-medium text-white">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {user.name}
                          </p>
                          <p className="text-sm text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        <Shield className="h-3 w-3" />
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "active"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                        }`}
                      >
                        {user.status === "active" ? "Hoạt động" : "Ngừng"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {canEdit && (
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4 text-slate-500" />
                          </Button>
                        )}
                        {canDelete && (
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Permission Info */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-amber-600" />
            <div>
              <h3 className="font-medium text-amber-900 dark:text-amber-100">
                Quyền hạn của bạn
              </h3>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                {canCreate && "✓ Thêm người dùng "}
                {canEdit && "✓ Sửa người dùng "}
                {canDelete && "✓ Xóa người dùng "}
                {!canCreate && !canEdit && !canDelete && "Chỉ xem"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

