# Remember Me Feature - Persistent Login

## 🎯 **Tổng quan**

Tính năng "Ghi nhớ đăng nhập" cho phép user không phải nhập lại thông tin đăng nhập mỗi lần truy cập hệ thống.

## 🔧 **Cách hoạt động**

### **1. Remember Me Checkbox:**
- User tick checkbox "Ghi nhớ đăng nhập" khi login
- Email được lưu vào localStorage
- Flag rememberMe được set

### **2. Session Extension:**
- Session duration: **30 ngày** (thay vì 1 ngày)
- JWT token được cache trong Redis với TTL 30 ngày
- NextAuth session maxAge: 30 days

### **3. Auto-fill Form:**
- Lần truy cập tiếp theo: Email được auto-fill
- Checkbox "Ghi nhớ đăng nhập" được pre-checked
- User chỉ cần nhập password

### **4. Auto-login Check:**
- Check session hiện tại khi load trang sign-in
- Nếu có session hợp lệ → Auto redirect đến dashboard
- Hiển thị loading state trong quá trình check

## 🏗️ **Implementation Details**

### **Frontend Components:**

#### **1. useRememberMe Hook:**
```typescript
// apps/web/hooks/use-remember-me.ts
const { rememberedData, saveRememberMe, clearRememberMe } = useRememberMe()

// Functions:
- saveRememberMe(email, rememberMe) // Lưu vào localStorage
- clearRememberMe() // Xóa remembered data
- hasRememberedData() // Check có data không
```

#### **2. WelcomeBackBanner:**
```typescript
// apps/web/components/welcome-back-banner.tsx
<WelcomeBackBanner />

// Features:
- Hiển thị "Chào mừng trở lại!" với email
- Button X để clear remembered data
- Chỉ hiện khi có remembered data
```

#### **3. AutoLoginCheck:**
```typescript
// apps/web/components/auto-login-check.tsx
<AutoLoginCheck />

// Features:
- Check session hiện tại
- Auto redirect nếu đã login
- Loading overlay trong quá trình check
```

### **Backend Configuration:**

#### **NextAuth Config:**
```typescript
// apps/web/server/auth/config.ts
session: {
  strategy: 'jwt',
  maxAge: 30 * 24 * 60 * 60, // 30 days
}

jwt: {
  encode: async ({ token, secret, maxAge, salt }) => {
    // Redis cache với TTL 30 ngày
    await redis.set(key, data, 'EX', 60 * 60 * 24 * 30)
  }
}
```

## 📊 **Data Flow**

### **Login Flow:**
```
1. User nhập email/password + tick "Ghi nhớ"
2. saveRememberMe() → localStorage
3. NextAuth login → JWT với maxAge 30 days
4. Redis cache session với TTL 30 days
5. Redirect to dashboard
```

### **Return Visit Flow:**
```
1. User truy cập /sign-in
2. AutoLoginCheck → useSession()
3. If session valid → Auto redirect to dashboard
4. If no session → Show form với email pre-filled
5. WelcomeBackBanner hiển thị "Chào mừng trở lại"
```

### **Logout Flow:**
```
1. User logout
2. NextAuth clear session
3. Redis cache expired
4. localStorage vẫn giữ email (cho lần login tiếp theo)
```

## 🔐 **Security Considerations**

### **What's Stored:**
- ✅ **Email**: Lưu trong localStorage (an toàn)
- ✅ **Remember flag**: Boolean flag
- ❌ **Password**: KHÔNG bao giờ lưu
- ❌ **Sensitive data**: KHÔNG lưu thông tin nhạy cảm

### **Session Security:**
- JWT token signed với secret
- Redis cache với TTL
- Session validation mỗi request
- Auto-expire sau 30 ngày

### **Logout Security:**
- Clear JWT token
- Clear Redis cache
- Session invalidated
- Email vẫn được giữ (user choice)

## 🎛️ **User Experience**

### **First Login:**
```
1. User nhập email/password
2. Tick "Ghi nhớ đăng nhập" (optional)
3. Login thành công → Choose app → Dashboard
```

### **Return Visit (với Remember Me):**
```
1. Truy cập /sign-in
2. Email đã được điền sẵn
3. Banner "Chào mừng trở lại!"
4. Chỉ cần nhập password
5. Login nhanh chóng
```

### **Return Visit (có Session):**
```
1. Truy cập /sign-in
2. AutoLoginCheck detect session
3. Auto redirect to dashboard
4. Không cần login lại
```

### **Clear Remember Me:**
```
1. Click X trên banner "Chào mừng trở lại"
2. Email field bị clear
3. Checkbox unchecked
4. localStorage cleaned
```

## 🚀 **Benefits**

1. **Better UX**: Không phải nhập lại thông tin
2. **Faster Login**: Email pre-filled, chỉ cần password
3. **Persistent Session**: 30 ngày không cần login lại
4. **Auto-redirect**: Check session và redirect tự động
5. **User Control**: User có thể clear remembered data
6. **Secure**: Không lưu password, chỉ lưu email

## 🔧 **Testing**

### **Test Remember Me:**
1. Login với checkbox checked
2. Logout
3. Truy cập /sign-in → Email pre-filled
4. Login chỉ với password

### **Test Auto-login:**
1. Login và đóng browser
2. Mở browser mới, truy cập /sign-in
3. Nếu session còn hạn → Auto redirect
4. Nếu session hết hạn → Show form với email pre-filled

### **Test Clear:**
1. Click X trên banner
2. Email field cleared
3. Checkbox unchecked
4. Next login không có pre-fill
