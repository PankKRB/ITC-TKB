# 📱 Build IPA miễn phí cho iPhone (Không cần trả $99)

## ⚠️ Lưu ý quan trọng:
- App chỉ hoạt động **7 ngày**, sau đó phải cài lại
- Cần có **Mac** hoặc **Hackintosh**
- Dùng Apple ID miễn phí (không cần Developer account)

---

## 🎯 Cách 1: Dùng Xcode trên Mac (Khuyên dùng)

### Bước 1: Cài đặt môi trường

```bash
# 1. Cài Xcode từ App Store (miễn phí)
# 2. Cài Command Line Tools
xcode-select --install

# 3. Cài CocoaPods
sudo gem install cocoapods

# 4. Cài Node.js
brew install node
```

### Bước 2: Export React Native code

```bash
cd ITCTKB-ReactNative

# Export sang native code
npx expo prebuild
```

### Bước 3: Mở Xcode

```bash
# Mở project trong Xcode
open ios/ITCTKB.xcworkspace
```

### Bước 4: Cấu hình trong Xcode

1. Chọn project **ITCTKB** ở sidebar
2. Tab **Signing & Capabilities**
3. Chọn **Team** → Đăng nhập Apple ID miễn phí
4. Xcode sẽ tự tạo provisioning profile

### Bước 5: Build IPA

1. Chọn **Product** → **Archive**
2. Đợi build xong (~5-10 phút)
3. Click **Distribute App**
4. Chọn **Ad Hoc** hoặc **Development**
5. Export IPA

### Bước 6: Cài IPA lên iPhone

**Cách 1: Dùng Apple Configurator 2**
1. Tải Apple Configurator 2 từ App Store
2. Kết nối iPhone qua USB
3. Kéo thả file IPA vào

**Cách 2: Dùng Xcode**
1. Kết nối iPhone qua USB
2. Window → Devices and Simulators
3. Kéo thả file IPA vào

---

## 🎯 Cách 2: Dùng AltStore (Không cần Mac!)

### Bước 1: Cài AltStore trên Windows

1. Tải AltStore: https://altstore.io
2. Cài iTunes và iCloud từ Apple (không phải Microsoft Store)
3. Chạy AltServer từ system tray

### Bước 2: Cài AltStore lên iPhone

1. Kết nối iPhone qua USB
2. Click AltServer icon → Install AltStore
3. Chọn iPhone của bạn
4. Nhập Apple ID và password

### Bước 3: Build IPA từ React Native

Trên Windows, bạn cần dùng dịch vụ build online:

**Option A: Dùng Expo EAS (Cần Mac)**
```bash
# Không build được IPA free trên Windows
```

**Option B: Thuê Mac cloud**
- MacStadium: https://www.macstadium.com
- MacinCloud: https://www.macincloud.com
- Làm theo Cách 1 trên Mac cloud

### Bước 4: Cài IPA bằng AltStore

1. Mở AltStore trên iPhone
2. Tap **+** → Chọn file IPA
3. App sẽ được cài đặt

### Bước 5: Gia hạn mỗi 7 ngày

AltStore tự động gia hạn nếu:
- iPhone và máy tính cùng WiFi
- AltServer đang chạy trên máy tính

---

## 🎯 Cách 3: Dùng Sideloadly (Windows)

### Bước 1: Tải Sideloadly

1. Tải: https://sideloadly.io
2. Cài đặt trên Windows

### Bước 2: Chuẩn bị IPA

Bạn cần có file IPA trước. Có thể:
- Build trên Mac (Cách 1)
- Thuê Mac cloud
- Hoặc dùng Expo Go (không cần IPA)

### Bước 3: Sideload IPA

1. Mở Sideloadly
2. Kết nối iPhone qua USB
3. Kéo thả file IPA
4. Nhập Apple ID
5. Click Start

---

## 💡 Khuyến nghị thực tế:

### Nếu bạn KHÔNG có Mac:

**→ Dùng Expo Go** (Đơn giản nhất)
```bash
npx expo start --tunnel
# Quét QR bằng Expo Go app
```

Ưu điểm:
- ✅ Miễn phí 100%
- ✅ Không giới hạn 7 ngày
- ✅ Không cần build
- ✅ Hot reload nhanh

Nhược điểm:
- ❌ Phải mở qua Expo Go

---

### Nếu bạn CÓ Mac:

**→ Build bằng Xcode** (Cách 1)
- File IPA miễn phí
- Dùng được 7 ngày
- Cài lại sau 7 ngày

---

### Nếu muốn app vĩnh viễn:

**→ Trả $99 cho Apple Developer**
- App không giới hạn thời gian
- Có thể lên App Store
- Build bằng EAS dễ dàng

---

## 🎯 Tóm lại:

| Cách | Chi phí | Thời hạn | Cần Mac? |
|------|---------|----------|----------|
| Expo Go | Miễn phí | Vĩnh viễn | ❌ |
| Xcode Free | Miễn phí | 7 ngày | ✅ |
| AltStore | Miễn phí | 7 ngày (tự gia hạn) | ❌ |
| Apple Developer | $99/năm | Vĩnh viễn | ❌ |

---

## ❓ Bạn nên chọn gì?

**Không có Mac + Muốn miễn phí:**
→ Dùng **Expo Go** (đang dùng)

**Có Mac + Muốn test:**
→ Build bằng **Xcode** (7 ngày)

**Muốn app thật vĩnh viễn:**
→ Trả **$99** cho Apple Developer

---

Bạn có Mac không? Tôi sẽ hướng dẫn chi tiết hơn! 💻
