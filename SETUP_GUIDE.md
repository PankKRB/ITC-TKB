# 🚀 Hướng dẫn Setup React Native App trên Windows

## 📋 Yêu cầu

- Windows 10/11
- Node.js 16+ (https://nodejs.org)
- npm hoặc yarn
- Điện thoại Android/iOS có cài Expo Go

---

## 🎯 Bước 1: Cài đặt Node.js

### 1.1. Tải Node.js
1. Truy cập: https://nodejs.org
2. Tải phiên bản **LTS** (Long Term Support)
3. Chạy file cài đặt
4. Chọn **"Add to PATH"** khi cài

### 1.2. Kiểm tra cài đặt
Mở **Command Prompt** hoặc **PowerShell**:
```bash
node --version
# Kết quả: v18.x.x hoặc v20.x.x

npm --version
# Kết quả: 9.x.x hoặc 10.x.x
```

---

## 📦 Bước 2: Cài đặt Dependencies

### 2.1. Mở project
```bash
cd ITCTKB-ReactNative
```

### 2.2. Cài packages
```bash
npm install
```

Đợi khoảng 2-5 phút để npm tải tất cả dependencies.

---

## ▶️ Bước 3: Chạy App

### 3.1. Start development server
```bash
npm start
```

Bạn sẽ thấy QR code trong terminal.

### 3.2. Cài Expo Go trên điện thoại

**Android:**
- Google Play: https://play.google.com/store/apps/details?id=host.exp.exponent

**iOS:**
- App Store: https://apps.apple.com/app/expo-go/id982107779

### 3.3. Quét QR code
1. Mở **Expo Go** app
2. Tap **"Scan QR code"**
3. Quét QR code từ terminal
4. App sẽ load trên điện thoại!

### 3.4. Hoặc chạy trên emulator

**Android Emulator:**
```bash
npm run android
```

**iOS Simulator (chỉ trên Mac):**
```bash
npm run ios
```

---

## 🔔 Bước 4: Setup Push Notification

### 4.1. Tạo Expo Account
1. Truy cập: https://expo.dev
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

### 4.2. Login vào Expo CLI
```bash
npx expo login
```
Nhập email và password.

### 4.3. Cập nhật Project ID
1. Tạo project trên Expo: https://expo.dev/accounts/[your-account]/projects
2. Copy **Project ID**
3. Mở file `app.json`
4. Tìm dòng:
```json
"projectId": "your-project-id-here"
```
5. Thay bằng Project ID thật

### 4.4. Lấy Expo Push Token
1. Chạy app trên điện thoại thật (không phải emulator)
2. Mở terminal, tìm dòng:
```
🔑 Expo Push Token: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
```
3. Copy token này

### 4.5. Test gửi notification

**Cách 1: Dùng Expo Push Tool**
1. Truy cập: https://expo.dev/notifications
2. Paste Expo Push Token
3. Điền title và message
4. Click **"Send a Notification"**

**Cách 2: Dùng cURL**
```bash
curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d "{
  \"to\": \"ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]\",
  \"title\": \"Test Notification\",
  \"body\": \"Đây là test push notification\",
  \"data\": {
    \"id\": \"12345\"
  }
}"
```

**Cách 3: Dùng PHP**
```bash
php send_push_expo.php
```

---

## 📱 Bước 5: Build App Production

### 5.1. Cài EAS CLI
```bash
npm install -g eas-cli
```

### 5.2. Login
```bash
eas login
```

### 5.3. Configure EAS
```bash
eas build:configure
```

### 5.4. Build iOS (không cần Mac!)
```bash
eas build --platform ios
```

Expo sẽ build trên cloud server của họ. Bạn sẽ nhận được file `.ipa` để upload lên App Store.

### 5.5. Build Android APK
```bash
eas build --platform android --profile preview
```

Tải file `.apk` và cài trực tiếp trên Android.

### 5.6. Build Android AAB (cho Google Play)
```bash
eas build --platform android --profile production
```

---

## 🎨 Bước 6: Tùy chỉnh App

### 6.1. Đổi URL website
Mở `App.js`, tìm dòng 28-29:
```javascript
const MAIN_WEBSITE = 'https://mywebsite.com';
const ALLOWED_DOMAIN = 'mywebsite.com';
```
Đổi thành domain của bạn.

### 6.2. Đổi tên app
Mở `app.json`, tìm dòng 3:
```json
"name": "ITC TKB",
```
Đổi thành tên bạn muốn.

### 6.3. Đổi màu sắc
Mở `app.json`, tìm:
```json
"backgroundColor": "#2c3e50"
```
Đổi thành màu hex bạn muốn.

### 6.4. Đổi icon
1. Tạo icon 1024x1024px (PNG, nền trong suốt)
2. Lưu vào `assets/icon.png`
3. Chạy lại: `npm start`

### 6.5. Đổi splash screen
1. Tạo splash 1242x2436px (PNG)
2. Lưu vào `assets/splash.png`
3. Chạy lại: `npm start`

---

## 🔍 Debug & Troubleshooting

### App không load?
1. ✅ Kiểm tra kết nối internet
2. ✅ Điện thoại và máy tính cùng WiFi
3. ✅ Tắt firewall/antivirus tạm thời
4. ✅ Chạy lại: `npm start -c` (clear cache)

### Không nhận notification?
1. ✅ Chạy trên thiết bị thật (không phải emulator)
2. ✅ Kiểm tra Project ID trong `app.json`
3. ✅ Kiểm tra Expo Push Token đúng chưa
4. ✅ Kiểm tra app có quyền notification

### Build lỗi?
1. ✅ Chạy: `npm install` lại
2. ✅ Xóa folder `node_modules` và chạy `npm install`
3. ✅ Clear cache: `npm start -c`
4. ✅ Update Expo: `npm install expo@latest`

### WebView không load website?
1. ✅ Kiểm tra URL trong `MAIN_WEBSITE`
2. ✅ Kiểm tra website có SSL (https://)
3. ✅ Xem console logs: nhấn `j` trong terminal

---

## 📚 Lệnh hữu ích

```bash
# Chạy app
npm start

# Chạy và clear cache
npm start -c

# Chạy trên Android
npm run android

# Chạy trên iOS (cần Mac)
npm run ios

# Build production
eas build --platform all

# Xem logs
npx expo start --dev-client

# Update dependencies
npm update

# Kiểm tra lỗi
npm run lint
```

---

## 🎉 Hoàn thành!

App của bạn giờ đã có:
- ✅ WebView load website
- ✅ Pull-to-refresh
- ✅ Xử lý link ngoài domain
- ✅ Camera/Microphone permissions
- ✅ Push Notification
- ✅ Splash screen
- ✅ Offline handling
- ✅ Chạy trên cả iOS & Android

Và quan trọng nhất: **Develop được trên Windows!** 🎊

---

## 💡 Tips

1. **Hot Reload**: Khi sửa code, app tự động reload
2. **Shake để debug**: Lắc điện thoại để mở dev menu
3. **Remote debugging**: Nhấn `j` trong terminal
4. **Xem logs**: Nhấn `r` để reload, `m` để toggle menu

---

Chúc bạn thành công! 🚀
