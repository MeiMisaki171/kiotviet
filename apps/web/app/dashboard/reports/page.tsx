import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, TrendingUp, DollarSign, Package } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Báo cáo
        </h1>
        <p className="text-slate-500">Xem báo cáo và thống kê chi tiết</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer border-none bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-900">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="mt-4">Báo cáo doanh thu</CardTitle>
            <CardDescription>
              Thống kê doanh thu theo ngày, tuần, tháng
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer border-none bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-900">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0070f4]">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="mt-4">Báo cáo bán hàng</CardTitle>
            <CardDescription>
              Phân tích xu hướng và hiệu suất bán hàng
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer border-none bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-900">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
              <Package className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="mt-4">Báo cáo tồn kho</CardTitle>
            <CardDescription>
              Theo dõi hàng tồn kho và cảnh báo hết hàng
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer border-none bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-900">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="mt-4">Báo cáo khách hàng</CardTitle>
            <CardDescription>
              Phân tích hành vi và phân khúc khách hàng
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Sample Chart Area */}
      <Card className="border-none bg-white shadow-md dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Tổng quan doanh thu tháng 12/2024
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-end justify-between gap-2">
            {[65, 80, 45, 90, 75, 60, 85, 95, 70, 80, 65, 88].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-500 to-indigo-600 transition-all hover:from-blue-400 hover:to-indigo-500"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-500">
            {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

