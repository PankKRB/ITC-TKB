# ⚡ Quick Build - Các lệnh cần chạy

## 🎯 Chuẩn bị Logo

1. **Chuyển logo.jpg thành PNG 1024x1024px:**
   - Online: https://www.iloveimg.com/convert-to-png
   - Resize: https://www.iloveimg.com/resize-image
   - Lưu vào: `assets/logo.png`

---

## 🚀 Build Commands

### Lần đầu tiên:

```bash
# 1. Cài EAS CLI
npm install -g eas-cli

# 2. Login Expo
eas login

# 3. Vào thư mục project
cd ITCTKB-ReactNative

# 4. Configure
eas build:configure

# 5. Build iOS
eas build --platform ios --profile preview

# 6. Build Android
eas build --platform android --profile preview
```

---

### Lần sau (đã setup):

```bash
cd ITCTKB-ReactNative

# Build iOS
eas build --platform ios --profile preview

# Build Android  
eas build --platform android --profile preview

# Build cả 2
eas build --platform all --profile preview
```

---

## 📥 Sau khi build xong:

1. Vào: https://expo.dev
2. Chọn project "itctkb"
3. Tab "Builds"
4. Download file:
   - iOS: `.ipa`
   - Android: `.apk`

---

## 🎯 Cài đặt:

**iPhone:**
- Cài qua TestFlight hoặc Apple Configurator

**Android:**
- Mở file `.apk` → Cài đặt
- Cho phép "Unknown sources" nếu hỏi

---

## ⏱️ Thời gian:

- iOS: ~15-20 phút
- Android: ~10-15 phút

---

Xong! 🎉
