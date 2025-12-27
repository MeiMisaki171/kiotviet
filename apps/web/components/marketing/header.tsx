"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Store,
  ShoppingCart,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Hammer,
  Pill,
  Baby,
  BookOpen,
  Factory,
  Car,
  Sofa,
  Gift,
  MoreHorizontal,
  Utensils,
  Coffee,
  Music2,
  Wine,
  Truck,
  Scissors,
  Dumbbell,
  Stethoscope,
  Hotel,
  Home,
  Globe,
  Facebook,
  Receipt,
  Calculator,
  CreditCard,
  MonitorSmartphone,
  ChevronDown,
  Salad,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    title: "Bán buôn, bán lẻ",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    items: [
      { icon: Shirt, label: "Thời trang" },
      { icon: ShoppingBag, label: "Tạp hóa & Siêu thị" },
      { icon: Smartphone, label: "Điện thoại & Điện máy" },
      { icon: Sparkles, label: "Mỹ phẩm" },
      { icon: Hammer, label: "Vật liệu xây dựng" },
      { icon: Salad, label: "Nông sản & Thực phẩm" },
      { icon: Pill, label: "Nhà thuốc" },
      { icon: Car, label: "Xe, Máy móc" },
      { icon: Baby, label: "Mẹ & Bé" },
      { icon: Sofa, label: "Nội thất & Gia dụng" },
      { icon: BookOpen, label: "Sách & Văn phòng phẩm" },
      { icon: Gift, label: "Hoa & Quà tặng" },
      { icon: Factory, label: "Sản xuất" },
      { icon: MoreHorizontal, label: "Khác" },
    ],
  },
  {
    title: "Ăn uống, giải trí",
    icon: Utensils,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    items: [
      { icon: Utensils, label: "Nhà hàng" },
      { icon: Salad, label: "Quán ăn" },
      { icon: Coffee, label: "Cafe, Trà sữa" },
      { icon: Music2, label: "Karaoke, Bida" },
      { icon: Wine, label: "Bar, Pub & Club" },
      { icon: Truck, label: "Căng tin & Trạm dừng nghỉ" },
    ],
  },
  {
    title: "Lưu trú, làm đẹp",
    icon: Scissors,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    items: [
      { icon: Sparkles, label: "Beauty Spa & Massage" },
      { icon: Scissors, label: "Hair Salon & Nails" },
      { icon: Hotel, label: "Khách sạn & Nhà nghỉ" },
      { icon: Home, label: "Homestay & Villa, Resort" },
      { icon: Dumbbell, label: "Fitness & Yoga" },
      { icon: Stethoscope, label: "Phòng khám" },
    ],
  },
];

const solutionItems = [
  { icon: Globe, label: "Đồng bộ sàn TMĐT", color: "text-[#0070f4]" },
  { icon: MonitorSmartphone, label: "Tạo Website bán hàng", color: "text-blue-600" },
  { icon: Truck, label: "Vận chuyển dễ dàng", color: "text-cyan-600" },
  { icon: Facebook, label: "Liên kết bán hàng Facebook", color: "text-blue-700" },
  { icon: CreditCard, label: "Thiết bị bán hàng", color: "text-purple-600" },
  { icon: Receipt, label: "Hóa đơn điện tử", color: "text-[#0070f4]" },
  { icon: Calculator, label: "Phần mềm kế toán", color: "text-indigo-600" },
];

export function MarketingHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0070f4]">
              <Store className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">KiotViet</span>
          </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Sản phẩm Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]">
              Sản phẩm
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeDropdown === "products" && (
              <div className="absolute left-1/2 top-full pt-2 -translate-x-1/2">
                <div className="w-[900px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/50">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Product Categories */}
                    {productCategories.map((category, i) => (
                      <div key={i}>
                        <div className="mb-4 flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${category.bgColor}`}>
                            <category.icon className={`h-4 w-4 ${category.color}`} />
                          </div>
                          <span className="font-semibold text-slate-900">
                            {category.title}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {category.items.map((item, j) => (
                            <li key={j}>
                              <a
                                href="#"
                                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0070f4]"
                              >
                                <item.icon className="h-4 w-4 text-slate-400" />
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Giải pháp tiện ích */}
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                          <Globe className="h-4 w-4 text-[#0070f4]" />
                        </div>
                        <span className="font-semibold text-slate-900">
                          Giải pháp tiện ích
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {solutionItems.map((item, j) => (
                          <li key={j}>
                            <a
                              href="#"
                              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0070f4]"
                            >
                              <item.icon className={`h-4 w-4 ${item.color}`} />
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Giải pháp Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]">
              Giải pháp
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/50">
                  <ul className="space-y-1">
                    {solutionItems.map((item, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0070f4]"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                            <item.icon className={`h-4 w-4 ${item.color}`} />
                          </div>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]"
          >
            Khách hàng
          </Link>

          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]"
          >
            Phí dịch vụ
          </Link>

          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]"
          >
            Hỗ trợ
          </Link>

          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]"
          >
            Tin tức
          </Link>

          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0070f4]"
          >
            Về KiotViet
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="border-[#0070f4] text-[#0070f4] hover:bg-blue-50 hover:text-[#0060d4]"
            >
              Đăng nhập
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="bg-[#0070f4] text-white shadow-lg shadow-[#0070f4]/25 hover:bg-[#0060d4]">
              Đăng ký
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

