# 📱 ITC TKB - React Native App

iOS & Android app được xây dựng bằng React Native + Expo, có thể develop trên Windows!

## ✨ Tính năng

### 🌐 WebView
- Load website: `https://mywebsite.com`
- Bắt URL trong domain và mở trong WebView
- Link ngoài domain hiện alert
- JavaScript đầy đủ
- Pull-to-refresh
- Caching
- Xử lý camera/microphone permissions

### 🔔 Push Notification
- Expo Push Notification
- Nhận notification ngay cả khi app tắt
- Tap notification → mở URL: `https://mywebsite.com/notification?id={id}`
- Badge counter
- Background mode

### 🎨 UI/UX
- Full-screen WebView
- Splash screen với logo
- Trang lỗi "Không có Internet"
- Loading spinner
- Nút back trên Android

## 🚀 Quick Start

### Bước 1: Cài đặt Node.js
Tải và cài Node.js từ: https://nodejs.org (phiên bản LTS)

### Bước 2: Cài dependencies
```bash
cd ITCTKB-ReactNative
npm install
```

### Bước 3: Chạy app
```bash
# Chạy development server
npm start

# Hoặc chạy trực tiếp trên Android
npm run android

# Hoặc chạy trên iOS (cần Mac)
npm run ios
```

### Bước 4: Test trên điện thoại
1. Cài **Expo Go** app trên điện thoại:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Quét QR code từ terminal bằng Expo Go

3. App sẽ load trên điện thoại của bạn!

## 📦 Build App Production

### Build iOS (không cần Mac!)
```bash
# Cài EAS CLI
npm install -g eas-cli

# Login vào Expo
eas login

# Build iOS
eas build --platform ios

# Tải file .ipa và upload lên App Store Connect
```

### Build Android
```bash
# Build APK
eas build --platform android --profile preview

# Build AAB cho Google Play
eas build --platform android --profile production
```

## 🔔 Setup Push Notification

### Lấy Expo Push Token
1. Chạy app trên thiết bị thật
2. Xem console log, tìm dòng:
```
🔑 Expo Push Token: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
```
3. Copy token này

### Test gửi notification
Dùng tool: https://expo.dev/notifications

Hoặc dùng cURL:
```bash
curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d '{
  "to": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
  "title": "Test Notification",
  "body": "Đây là test push notification",
  "data": {
    "id": "12345"
  }
}'
```

### Gửi từ PHP
Xem file `send_push_expo.php`

## 🎨 Tùy chỉnh

### Đổi URL website
Mở `App.js`, tìm dòng:
```javascript
const MAIN_WEBSITE = 'https://mywebsite.com';
const ALLOWED_DOMAIN = 'mywebsite.com';
```
Đổi thành domain của bạn.

### Đổi màu sắc
Mở `app.json`, tìm:
```json
"backgroundColor": "#2c3e50"
```
Đổi thành màu bạn muốn.

### Đổi icon & splash
1. Tạo icon 1024x1024px → lưu vào `assets/icon.png`
2. Tạo splash 1242x2436px → lưu vào `assets/splash.png`
3. Chạy: `npm start` (Expo tự động resize)

## 📂 Cấu trúc

```
ITCTKB-ReactNative/
├── App.js                      # Main app với WebView
├── components/
│   ├── NoInternetScreen.js     # Màn hình lỗi mạng
│   └── SplashScreen.js         # Splash screen
├── assets/                     # Icon, splash, images
├── app.json                    # Cấu hình Expo
├── package.json                # Dependencies
└── babel.config.js             # Babel config
```

## 🔍 Debug

### Xem logs
```bash
# Xem logs real-time
npm start
# Nhấn 'j' để mở debugger
```

### Clear cache
```bash
expo start -c
```

### Lỗi không load WebView?
1. Kiểm tra URL trong `MAIN_WEBSITE`
2. Kiểm tra kết nối internet
3. Xem console logs

## 📱 Yêu cầu

- Node.js 16+
- npm hoặc yarn
- Expo Go app (để test)
- Expo account (để build production)

## 🎉 Ưu điểm so với Swift

✅ Develop trên Windows  
✅ Build iOS không cần Mac  
✅ Hot reload nhanh  
✅ Code một lần, chạy cả iOS & Android  
✅ Dễ debug  
✅ Cộng đồng lớn  

## 📚 Tài liệu

- Expo: https://docs.expo.dev
- React Native: https://reactnative.dev
- Expo Notifications: https://docs.expo.dev/push-notifications/overview/

---

Chúc bạn thành công! 🚀
