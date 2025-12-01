# 🏗️ Hướng dẫn Build App ITC TKB

## 📋 Chuẩn bị

### 1. Đảm bảo đã cài đặt:
- Node.js
- npm
- Tài khoản Expo (miễn phí tại https://expo.dev)

### 2. Chuẩn bị logo:
- File logo đã có: `logo.jpg`
- Cần chuyển thành PNG và resize

---

## 🎨 Bước 1: Chuẩn bị Icon & Splash

### Tạo icon từ logo.jpg:

**Cách 1: Dùng online tool**
1. Truy cập: https://www.iloveimg.com/convert-to-png
2. Upload `logo.jpg` → Convert sang PNG
3. Truy cập: https://www.iloveimg.com/resize-image
4. Resize thành 1024x1024px
5. Lưu vào: `ITCTKB-ReactNative/assets/logo.png`

**Cách 2: Dùng lệnh (nếu có ImageMagick)**
```bash
# Cài ImageMagick trước
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Convert và resize
cd ITCTKB-ReactNative/assets
magick logo.jpg -resize 1024x1024 logo.png
```

---

## 🚀 Bước 2: Cài EAS CLI

```bash
npm install -g eas-cli
```

---

## 🔐 Bước 3: Login Expo

```bash
eas login
```

Nhập email và password của tài khoản Expo.

---

## ⚙️ Bước 4: Configure EAS

```bash
cd ITCTKB-ReactNative
eas build:configure
```

Chọn:
- Platform: `All` (iOS + Android)
- Confirm: `Yes`

---

## 📱 Bước 5: Build App

### Build cho iPhone (iOS):

```bash
eas build --platform ios --profile preview
```

**Lưu ý:**
- Cần Apple ID (miễn phí)
- Build trên cloud Expo (không cần Mac!)
- Thời gian: ~15-20 phút

### Build cho Android:

```bash
eas build --platform android --profile preview
```

**Lưu ý:**
- Không cần tài khoản gì
- Thời gian: ~10-15 phút
- Tạo file APK cài trực tiếp

---

## 📥 Bước 6: Tải và Cài App

### Sau khi build xong:

1. Expo sẽ hiển thị link tải
2. Hoặc vào: https://expo.dev/accounts/[your-account]/projects/itctkb/builds

### Cài trên iPhone:
- Tải file `.ipa`
- Cài qua **TestFlight** hoặc **Apple Configurator**

### Cài trên Android:
- Tải file `.apk`
- Mở file → Cài đặt
- Cho phép "Install from unknown sources" nếu hỏi

---

## 🎯 Build Production (lên Store)

### Cho App Store (iOS):

```bash
eas build --platform ios --profile production
```

Sau đó submit:
```bash
eas submit --platform ios
```

### Cho Google Play (Android):

```bash
eas build --platform android --profile production
```

Sau đó submit:
```bash
eas submit --platform android
```

---

## 🔍 Kiểm tra Build Status

```bash
# Xem danh sách builds
eas build:list

# Xem chi tiết build
eas build:view [BUILD_ID]
```

Hoặc vào: https://expo.dev/accounts/[your-account]/projects/itctkb/builds

---

## ⚠️ Troubleshooting

### Lỗi: "No Expo account found"
```bash
eas logout
eas login
```

### Lỗi: "Icon not found"
- Đảm bảo file `assets/logo.png` tồn tại
- Kích thước: 1024x1024px
- Format: PNG với nền trong suốt

### Lỗi: "Build failed"
- Xem logs: `eas build:view [BUILD_ID]`
- Kiểm tra `app.json` syntax
- Chạy lại: `npm install`

---

## 📊 Thời gian Build

| Platform | Profile | Thời gian |
|----------|---------|-----------|
| iOS | Preview | ~15-20 phút |
| iOS | Production | ~20-25 phút |
| Android | Preview | ~10-15 phút |
| Android | Production | ~15-20 phút |

---

## 💰 Chi phí

- **EAS Build**: Miễn phí (30 builds/tháng)
- **Expo Account**: Miễn phí
- **Apple Developer**: $99/năm (để lên App Store)
- **Google Play**: $25 (một lần, để lên Play Store)

---

## 🎉 Hoàn thành!

Sau khi build xong, bạn sẽ có:
- ✅ App độc lập (không cần Expo Go)
- ✅ Icon và splash screen với logo
- ✅ Push notification hoạt động
- ✅ Thông báo tự động lúc 5h sáng

---

## 📞 Support

Nếu gặp lỗi, check:
1. Expo Status: https://status.expo.dev
2. Expo Docs: https://docs.expo.dev/build/introduction/
3. Build logs trên Expo dashboard
