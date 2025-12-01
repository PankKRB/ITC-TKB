# 🔧 Fix lỗi SDK không tương thích

## Lỗi: "Project is incompatible with this version of Expo Go"

### Nguyên nhân:
- Expo Go trên iPhone: SDK 54
- Project hiện tại: SDK 50

### ✅ Giải pháp:

Đã update project lên SDK 54. Làm theo các bước sau:

## Bước 1: Xóa node_modules cũ
```bash
cd ITCTKB-ReactNative
rmdir /s /q node_modules
del package-lock.json
```

## Bước 2: Cài lại dependencies
```bash
npm install
```

## Bước 3: Clear cache và chạy lại
```bash
npx expo start -c --tunnel
```

## Bước 4: Quét QR code lại trên iPhone

Lần này sẽ hoạt động! 🎉

---

## Nếu vẫn lỗi:

### Option 1: Update Expo Go trên iPhone
- Mở App Store
- Tìm "Expo Go"
- Tap "Update" (nếu có)

### Option 2: Dùng Development Build
```bash
npm install -g eas-cli
eas login
eas build --profile development --platform ios
```

---

## Lưu ý:
- Đã update tất cả packages lên phiên bản mới nhất
- Tương thích với Expo Go SDK 54
- Hỗ trợ React Native New Architecture
