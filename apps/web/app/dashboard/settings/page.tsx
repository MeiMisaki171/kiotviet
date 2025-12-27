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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Store, Bell, Shield, Save } from "lucide-react";

export default function SettingsPage() {
  const { hasPermission } = useAuthStore();

  const canEdit = hasPermission("SETTINGS_EDIT");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Cài đặt hệ thống
        </h1>
        <p className="text-slate-500">Quản lý cấu hình và cài đặt ứng dụng</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Store Settings */}
        <Card className="border-none bg-white shadow-md dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5 text-blue-600" />
              Thông tin cửa hàng
            </CardTitle>
            <CardDescription>
              Cấu hình thông tin cơ bản của cửa hàng
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tên cửa hàng</Label>
              <Input
                defaultValue="KiotViet Store"
                disabled={!canEdit}
                className="disabled:opacity-60"
              />
            </div>
            <div className="space-y-2">
              <Label>Địa chỉ</Label>
              <Input
                defaultValue="123 Nguyễn Văn A, Q.1, TP.HCM"
                disabled={!canEdit}
                className="disabled:opacity-60"
              />
            </div>
            <div className="space-y-2">
              <Label>Số điện thoại</Label>
              <Input
                defaultValue="0909 123 456"
                disabled={!canEdit}
                className="disabled:opacity-60"
              />
            </div>
            {canEdit && (
              <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600">
                <Save className="mr-2 h-4 w-4" />
                Lưu thay đổi
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-none bg-white shadow-md dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-amber-600" />
              Thông báo
            </CardTitle>
            <CardDescription>Cấu hình cài đặt thông báo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Thông báo đơn hàng mới
                </p>
                <p className="text-sm text-slate-500">
                  Nhận thông báo khi có đơn hàng mới
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                disabled={!canEdit}
                className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Thông báo tồn kho thấp
                </p>
                <p className="text-sm text-slate-500">
                  Cảnh báo khi sản phẩm sắp hết
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                disabled={!canEdit}
                className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Email báo cáo hàng tuần
                </p>
                <p className="text-sm text-slate-500">
                  Nhận báo cáo tổng hợp qua email
                </p>
              </div>
              <input
                type="checkbox"
                disabled={!canEdit}
                className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-none bg-white shadow-md dark:bg-slate-900 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              Bảo mật
            </CardTitle>
            <CardDescription>
              Cài đặt bảo mật và quyền truy cập
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Thời gian hết hạn phiên (phút)</Label>
                <Input
                  type="number"
                  defaultValue="30"
                  disabled={!canEdit}
                  className="disabled:opacity-60"
                />
              </div>
              <div className="space-y-2">
                <Label>Số lần đăng nhập sai tối đa</Label>
                <Input
                  type="number"
                  defaultValue="5"
                  disabled={!canEdit}
                  className="disabled:opacity-60"
                />
              </div>
            </div>
            {canEdit && (
              <Button className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600">
                <Save className="mr-2 h-4 w-4" />
                Cập nhật cài đặt bảo mật
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {!canEdit && (
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-amber-600" />
              <div>
                <h3 className="font-medium text-amber-900 dark:text-amber-100">
                  Chế độ chỉ xem
                </h3>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  Bạn không có quyền chỉnh sửa cài đặt. Liên hệ quản trị viên để
                  được cấp quyền.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

