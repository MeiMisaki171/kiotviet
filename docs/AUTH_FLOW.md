# Authentication & Permission Flow

## 🔄 **Flow mới - Load roles và permissions khi login thành công**

### **1. User đăng nhập:**
```
User Input → NextAuth → API Login → Session Created
```

### **2. Session Detection & Permission Loading:**
```
Session Change → useUserPermissions Hook → API Calls → Store Update → Menu Render
```

### **3. Chi tiết flow:**

#### **🔑 Login Process:**
1. User submit form tại `/sign-in`
2. NextAuth gọi API `/authentications/method/login`
3. Session được tạo và lưu trong JWT + Redis
4. User được redirect hoặc hiển thị choose-app modal

#### **📡 Permission Loading (Automatic):**
1. `UserPermissionsProvider` detect session change
2. `useUserPermissions` hook được trigger
3. **Parallel API calls:**
   - `GET /eticket-api/nguoi-dung-vai-tro/user/roles/{userId}`
   - `GET /eticket-api/nguoi-dung-quyen-han/user/permissions/{userId}`
4. **Store update:**
   - `setUserRoles(roles)` → Update roleMap
   - `setPermissions(permissions)` → Update permissionMap
5. **Menu re-render** with new permissions

#### **🎯 Menu Display:**
1. Sidebar check permissions: `hasPermissions(['PERMISSION_CODE'])`
2. Show/hide menu groups based on user permissions
3. Page content render based on permissions

## 🏗️ **Kiến trúc mới:**

### **Global Level:**
```
app/layout.tsx
├── UserPermissionsProvider (Global)
│   ├── useUserPermissions Hook
│   │   ├── Session Detection
│   │   ├── API Calls (Roles + Permissions)
│   │   └── Store Update
│   └── Global Function Setup (Dev Mode)
└── All App Routes
```

### **Layout Level:**
```
(admin)/layout.tsx & (eticket)/layout.tsx
├── Session Check (Redirect if not logged in)
├── App ID Setup
└── AdminLayoutContent
    ├── AppSidebar (Permission-based menu)
    └── Page Content
```

### **Page Level:**
```
booking/page.tsx
└── RoleBasedContent
    ├── Check Permissions
    ├── Show Content Based on Role
    └── Debug Panel (Dev Mode)
```

## 📊 **Permission Mapping:**

### **Database Structure:**
```sql
nguoi_dung (users)
├── nguoi_dung_vai_tro (user_roles)
│   └── vai_tro (roles)
│       └── vai_tro_quyen_han (role_permissions)
│           └── quyen_han (permissions)
└── nguoi_dung_quyen_han (user_permissions - direct)
```

### **API Responses:**
```javascript
// GET /nguoi-dung-vai-tro/user/roles/{userId}
[
  {
    role: {
      id: "r1",
      code: "TICKET_SALES_STAFF", 
      name: "Nhân viên bán vé"
    },
    assignedAt: "2024-01-01T00:00:00Z"
  }
]

// GET /nguoi-dung-quyen-han/user/permissions/{userId}
[
  "TICKET_SALES_DASHBOARD",
  "BOOKING_MANAGEMENT", 
  "BOOKING_CREATE"
]
```

### **Store Structure:**
```javascript
useUserStore: {
  permissions: ["TICKET_SALES_DASHBOARD", "BOOKING_MANAGEMENT"],
  permissionMap: { "TICKET_SALES_DASHBOARD": true, "BOOKING_MANAGEMENT": true },
  userRoles: [{ role: { code: "TICKET_SALES_STAFF" }, assignedAt: "..." }],
  roleMap: { "TICKET_SALES_STAFF": true }
}
```

## 🔧 **Debug Tools (Development):**

### **1. Role Switcher (Sidebar):**
- Location: `SidebarFooter`
- Function: Test different roles with mock permissions
- Auto-reload after role change

### **2. Debug Permissions Panel:**
- Location: Each page content
- Display: Current permissions, roles, maps
- Purpose: Debug why menu/content not showing

### **3. Console Logs:**
```javascript
// When session changes
🔑 Session detected, loading permissions for user: {userId}

// API calls
🔄 Loading user roles and permissions for user: {userId}
✅ User roles loaded: [...]
✅ User permissions loaded: [...]

// Errors
❌ Error fetching user roles and permissions: {...}
```

## 🎯 **Cách hoạt động:**

1. **User login** → Session created
2. **Global provider** detects session → Load permissions
3. **Store updated** → Menu re-renders
4. **Page access** → Check permissions → Show appropriate content
5. **Real-time** → No need to reload, permissions loaded once

## 🚀 **Advantages:**

- ✅ **Automatic**: Load permissions ngay khi login
- ✅ **Global**: Không phụ thuộc vào layout cụ thể  
- ✅ **Efficient**: Load một lần, cache trong store
- ✅ **Real-time**: Menu update ngay lập tức
- ✅ **Debug-friendly**: Tools để debug permissions
- ✅ **Production-ready**: Debug tools tự động ẩn
