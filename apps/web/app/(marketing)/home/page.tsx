"use client";

import Link from "next/link";
import {
  Store,
  ShoppingCart,
  Utensils,
  Scissors,
  Hotel,
  QrCode,
  Receipt,
  Calculator,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: ShoppingCart,
    title: "Bán buôn, bán lẻ",
    description: "Quản lý kho hàng, đơn hàng, khách hàng hiệu quả",
  },
  {
    icon: Utensils,
    title: "Ăn uống, giải trí",
    description: "Quản lý order, bàn, bếp chuyên nghiệp",
  },
  {
    icon: Scissors,
    title: "Dịch vụ làm đẹp",
    description: "Đặt lịch, quản lý khách hàng thân thiết",
  },
  {
    icon: Hotel,
    title: "Nhà nghỉ, khách sạn",
    description: "Quản lý phòng, booking, check-in/out",
  },
];

const solutions = [
  {
    icon: QrCode,
    title: "Thanh toán QR",
    description: "Tích hợp đa dạng phương thức thanh toán",
  },
  {
    icon: Receipt,
    title: "Hóa đơn điện tử",
    description: "Xuất hóa đơn điện tử miễn phí",
  },
  {
    icon: Calculator,
    title: "Phần mềm kế toán",
    description: "Quản lý sổ sách, báo cáo thuế",
  },
  {
    icon: TrendingUp,
    title: "Báo cáo thông minh",
    description: "Theo dõi doanh thu, lợi nhuận real-time",
  },
];

const stats = [
  { value: "300,000+", label: "Nhà kinh doanh sử dụng" },
  { value: "10,000+", label: "Khách hàng mới mỗi tháng" },
  { value: "20+", label: "Ngành hàng hỗ trợ" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

const testimonials = [
  {
    content:
      "Không còn lo lắng thất thoát dữ liệu, phần mềm KiotViet giúp tôi quản lý bán hàng chặt chẽ hơn.",
    author: "Chivavo Thời Trang",
    rating: 5,
  },
  {
    content:
      "Dễ sử dụng quá, order thanh toán nhanh gọn, thực sự thuận tiện mọi người ạ.",
    author: "Cafe Vitamin Hà Nội",
    rating: 5,
  },
  {
    content:
      "Không ngờ app lại đơn giản và phù hợp với mình đến vậy. Duyên tiền định chăng :)))",
    author: "Việt Pet Garden",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
              <Store className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">KiotViet</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-600"
            >
              Sản phẩm
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-600"
            >
              Giải pháp
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-600"
            >
              Phí dịch vụ
            </Link>
            <Link
              href="#support"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-600"
            >
              Hỗ trợ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-slate-700">
                Đăng nhập
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:from-green-600 hover:to-emerald-700">
                Dùng thử miễn phí
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                </span>
                300,000+ nhà kinh doanh tin dùng
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
                Phần mềm{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  quản lý bán hàng
                </span>{" "}
                phổ biến nhất
              </h1>

              <p className="mb-8 text-lg text-slate-600 lg:text-xl">
                Giải pháp kinh doanh toàn diện giúp bạn quản lý dễ dàng, bán
                hàng hiệu quả với hơn 20+ ngành hàng
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-white shadow-xl shadow-green-500/30 hover:from-green-600 hover:to-emerald-700 sm:w-auto"
                  >
                    Dùng thử miễn phí
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-300 sm:w-auto"
                >
                  Xem phí dịch vụ
                </Button>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                ✓ 7 ngày dùng thử miễn phí &nbsp; ✓ Không cần thẻ tín dụng
              </p>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl bg-white p-6 shadow-2xl shadow-green-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white">
                    <div>
                      <p className="text-sm opacity-80">Doanh thu hôm nay</p>
                      <p className="text-2xl font-bold">125,430,000đ</p>
                    </div>
                    <TrendingUp className="h-10 w-10 opacity-50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Đơn hàng</p>
                      <p className="text-xl font-bold text-slate-900">1,234</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Khách hàng</p>
                      <p className="text-xl font-bold text-slate-900">8,492</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-700">
                      Đơn hàng #DH001 đã hoàn thành
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-1/4 rounded-xl bg-white p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <QrCode className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Thanh toán QR</span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-xl bg-white p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                    <Receipt className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">Hóa đơn điện tử</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-green-600 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Phần mềm chuyên biệt cho{" "}
              <span className="text-green-600">từng ngành hàng</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Chúng tôi thiết kế giải pháp riêng biệt, tối ưu cho đặc thù kinh
              doanh của từng ngành
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-green-200 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white transition-transform group-hover:scale-110">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Giải pháp kinh doanh{" "}
              <span className="text-green-400">toàn diện</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Tích hợp đầy đủ các công cụ giúp bạn vận hành kinh doanh hiệu quả
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-green-500/50 hover:bg-slate-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-400">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/sign-in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:from-green-600 hover:to-emerald-700"
              >
                Bắt đầu dùng thử miễn phí
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Badge */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-12">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-semibold text-slate-900">
                  Bảo mật dữ liệu ISO 27001
                </p>
                <p className="text-sm text-slate-500">
                  Đạt tiêu chuẩn quốc tế về bảo mật
                </p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-slate-200 lg:block" />
            <div className="flex items-center gap-3">
              <Users className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-semibold text-slate-900">1,000+ nhân sự</p>
                <p className="text-sm text-slate-500">
                  Đội ngũ hỗ trợ tận tâm 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Khách hàng nói gì về{" "}
              <span className="text-green-600">KiotViet</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-slate-600">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <p className="font-medium text-slate-900">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                Trải nghiệm ứng dụng KiotViet trên{" "}
                <span className="text-green-600">điện thoại</span>
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Quản lý cửa hàng mọi lúc mọi nơi với ứng dụng di động KiotViet
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-80 w-40 rounded-3xl bg-slate-900 p-2 shadow-2xl">
                  <div className="flex h-full w-full flex-col rounded-2xl bg-white">
                    <div className="flex items-center justify-between border-b p-3">
                      <Store className="h-5 w-5 text-green-600" />
                      <span className="text-xs font-medium">KiotViet</span>
                    </div>
                    <div className="flex-1 p-3">
                      <div className="mb-3 rounded-lg bg-green-500 p-3 text-white">
                        <p className="text-xs">Doanh thu</p>
                        <p className="text-lg font-bold">125.4M</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 rounded bg-slate-100" />
                        <div className="h-8 rounded bg-slate-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Hãy để KiotViet đồng hành kinh doanh cùng bạn
          </h2>
          <p className="mb-8 text-lg text-green-100">
            Bắt đầu dùng thử miễn phí 7 ngày ngay hôm nay
          </p>
          <Link href="/sign-in">
            <Button
              size="lg"
              className="bg-white px-8 text-green-600 shadow-xl hover:bg-green-50"
            >
              Dùng thử miễn phí
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                  <Store className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">KiotViet</span>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Công ty Cổ phần Công nghệ KiotViet
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Bán buôn, bán lẻ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ăn uống, giải trí
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Dịch vụ làm đẹp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Nhà nghỉ, khách sạn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Liên hệ</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>1800 6162</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-500" />
                  <span>support@kiotviet.vn</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span>Tầng 3-6, số 1A Yết Kiêu, Hà Nội</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            © 2024 KiotViet™ - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

