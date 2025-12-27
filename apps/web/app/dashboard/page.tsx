import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Package,
  FileText,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  const stats = [
    {
      title: "Tổng doanh thu",
      value: "125,430,000đ",
      change: "+12.5%",
      icon: DollarSign,
      color: "from-[#0070f4] to-[#0060d4]",
    },
    {
      title: "Đơn hàng",
      value: "1,234",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Khách hàng",
      value: "8,492",
      change: "+15.3%",
      icon: Users,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Sản phẩm",
      value: "456",
      change: "+4.1%",
      icon: Package,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-lg shadow-blue-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Xin chào, {session?.user?.name}! 👋
            </h1>
            <p className="mt-1 text-blue-100">
              Chào mừng bạn quay trở lại. Đây là tổng quan hoạt động kinh doanh
              hôm nay.
            </p>
          </div>
          <TrendingUp className="hidden h-16 w-16 text-white/20 md:block" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="border-none bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-slate-900"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.title}
              </CardTitle>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
              >
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stat.value}
              </div>
              <p className="mt-1 flex items-center text-xs text-[#0070f4]">
                <TrendingUp className="mr-1 h-3 w-3" />
                {stat.change} so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-none bg-white shadow-md dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Đơn hàng gần đây
            </CardTitle>
            <CardDescription>5 đơn hàng mới nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30">
                      #{i}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        Đơn hàng #DH00{i}
                      </p>
                      <p className="text-sm text-slate-500">Khách hàng {i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {(i * 150000).toLocaleString()}đ
                    </p>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-[#0070f4] dark:bg-blue-900/30 dark:text-blue-400">
                      Hoàn thành
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-md dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-violet-600" />
              Sản phẩm bán chạy
            </CardTitle>
            <CardDescription>Top 5 sản phẩm trong tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "iPhone 15 Pro Max", sold: 156, revenue: 2340000000 },
                { name: "Samsung Galaxy S24", sold: 134, revenue: 1876000000 },
                { name: "MacBook Air M3", sold: 89, revenue: 2403000000 },
                { name: "iPad Pro 12.9", sold: 67, revenue: 871000000 },
                { name: "AirPods Pro 2", sold: 234, revenue: 561600000 },
              ].map((product, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600 dark:bg-violet-900/30">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {product.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        Đã bán: {product.sold}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {(product.revenue / 1000000).toFixed(0)}M đ
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

