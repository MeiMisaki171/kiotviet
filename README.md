# KiotViet - Next.js Monorepo

Hệ thống quản lý bán hàng KiotViet được xây dựng với Next.js, Tailwind CSS, shadcn/ui và NextAuth.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Authentication**: NextAuth.js v5
- **State Management**: Zustand
- **Monorepo**: Turborepo + pnpm

## 📁 Cấu trúc dự án

```
KiotViet/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/                # App Router pages
│       │   ├── (auth)/         # Auth pages (sign-in)
│       │   └── dashboard/      # Protected dashboard pages
│       ├── components/         # React components
│       │   ├── ui/             # shadcn/ui components
│       │   └── dashboard/      # Dashboard components
│       ├── hooks/              # Custom React hooks
│       ├── lib/                # Utilities
│       ├── providers/          # React context providers
│       ├── server/             # Server-side code
│       │   └── auth/           # NextAuth configuration
│       └── stores/             # Zustand stores
├── docs/                       # Documentation
├── package.json                # Root package.json
├── pnpm-workspace.yaml         # pnpm workspace config
└── turbo.json                  # Turborepo config
```

## 🔧 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 18
- pnpm >= 9

### Cài đặt dependencies

```bash
# Cài đặt pnpm nếu chưa có
npm install -g pnpm

# Cài đặt dependencies
pnpm install
```

### Cấu hình môi trường

Tạo file `apps/web/.env.local`:

```env
# NextAuth
AUTH_SECRET=your-super-secret-key-here-must-be-32-chars-long
AUTH_URL=http://localhost:3000
```

> **Tip**: Tạo AUTH_SECRET bằng lệnh: `openssl rand -base64 32`

### Chạy development server

```bash
# Chạy toàn bộ monorepo
pnpm dev

# Hoặc chỉ chạy web app
cd apps/web && pnpm dev
```

Truy cập <http://localhost:3000>

## 🔐 Authentication

### Tài khoản Demo

| Role  | Email              | Password  | Permissions                           |
|-------|-------------------|-----------|---------------------------------------|
| Admin | <admin@kiotviet.vn> | admin123  | Full access (tất cả quyền)            |
| User  | <user@kiotviet.vn>  | user123   | Dashboard & Reports (chỉ xem)         |

### Auth Flow

1. **Login**: User nhập credentials → NextAuth validate → JWT token created
2. **Session**: Token stored in cookie với maxAge 30 ngày (Remember Me)
3. **Permission Loading**: Session detected → Permissions loaded vào Zustand store
4. **Protected Routes**: Middleware check session → Redirect nếu chưa login

### Remember Me Feature

- ✅ Email được lưu vào localStorage
- ✅ Auto-fill form khi quay lại
- ✅ Session kéo dài 30 ngày
- ✅ Auto-redirect nếu session còn hạn
- ❌ Password KHÔNG được lưu

## 🛡️ Permission System

### Cách hoạt động

```typescript
// Trong component
const { hasPermission, hasPermissions } = useAuthStore();

// Check single permission
if (hasPermission("USERS_CREATE")) {
  // Show create button
}

// Check multiple permissions (ALL required)
if (hasPermissions(["USERS_EDIT", "USERS_DELETE"])) {
  // Show edit/delete actions
}
```

### Danh sách Permissions

| Permission      | Mô tả                  |
|-----------------|------------------------|
| DASHBOARD_VIEW  | Xem trang tổng quan    |
| USERS_VIEW      | Xem danh sách users    |
| USERS_CREATE    | Tạo user mới           |
| USERS_EDIT      | Sửa user               |
| USERS_DELETE    | Xóa user               |
| SETTINGS_VIEW   | Xem cài đặt            |
| SETTINGS_EDIT   | Sửa cài đặt            |
| REPORTS_VIEW    | Xem báo cáo            |

## 📱 Features

### Đã hoàn thành

- ✅ Authentication với NextAuth v5
- ✅ Remember Me (lưu email, session 30 ngày)
- ✅ Auto-login check
- ✅ Permission-based menu
- ✅ Responsive sidebar
- ✅ Dashboard với stats
- ✅ User management page
- ✅ Settings page
- ✅ Reports page
- ✅ Toast notifications
- ✅ Dark mode ready (CSS variables)

### Đang phát triển

- 🔄 Orders management
- 🔄 Products management
- 🔄 Customers management
- 🔄 Redis session caching
- 🔄 API integration

## 🎨 UI/UX

### Design System

- **Font**: Outfit (Google Fonts)
- **Colors**: Blue-Indigo gradient theme
- **Components**: shadcn/ui (customized)
- **Icons**: Lucide React

### Responsive

- Desktop: Full sidebar
- Mobile: Bottom navigation

## 📚 Tài liệu tham khảo

- [AUTH_FLOW.md](./docs/AUTH_FLOW.md) - Chi tiết auth flow
- [REMEMBER_ME_FEATURE.md](./docs/REMEMBER_ME_FEATURE.md) - Chi tiết Remember Me

## 🧪 Scripts

```bash
# Development
pnpm dev          # Chạy dev server

# Build
pnpm build        # Build production

# Lint
pnpm lint         # Run ESLint

# Clean
pnpm clean        # Xóa node_modules, .next, dist
```

## 📝 License

MIT © KiotViet
