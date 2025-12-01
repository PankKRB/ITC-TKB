# 🖥️ Hackintosh - Cài macOS trên PC Windows

## ⚠️ Cảnh báo:

**Hackintosh khó và mất thời gian!**
- Cài đặt: 4-8 giờ
- Có thể không tương thích với PC của bạn
- Cần kiến thức kỹ thuật
- Có thể gặp nhiều lỗi

**Khuyến nghị: Dùng EAS build trên cloud (đã fix ở trên) - Dễ hơn nhiều!**

---

## 🎯 Nếu vẫn muốn thử Hackintosh:

### Bước 1: Kiểm tra tương thích

**CPU tương thích:**
- Intel Core i3/i5/i7/i9 (Gen 6 trở lên)
- AMD Ryzen (khó hơn, cần patch)

**Không tương thích:**
- CPU Intel Pentium/Celeron
- Laptop (rất khó)

**Kiểm tra CPU:**
```bash
# Trên Windows
wmic cpu get name
```

### Bước 2: Chuẩn bị

**Cần có:**
- USB 16GB trở lên
- Kết nối internet ổn định
- 50GB ổ cứng trống
- 8GB RAM trở lên

**Tải về:**
- macOS Ventura/Sonoma image
- OpenCore bootloader
- Kext drivers cho phần cứng

### Bước 3: Tạo USB boot

**Dùng tool:**
- **Olarila**: https://www.olarila.com (Dễ nhất)
- **Dortania**: https://dortania.github.io (Chính thống)

**Với Olarila:**
1. Tải Olarila Vanilla Image
2. Dùng Etcher để ghi vào USB
3. Config EFI cho phần cứng của bạn

### Bước 4: Cài đặt

1. Boot từ USB
2. Chọn "Install macOS"
3. Chọn ổ cứng để cài
4. Đợi 30-60 phút
5. Reboot và setup

### Bước 5: Post-install

1. Copy EFI từ USB sang ổ cứng
2. Cài Xcode từ App Store
3. Cài Command Line Tools
4. Setup Apple ID

---

## 📱 Build IPA trên Hackintosh

Sau khi cài xong Hackintosh:

```bash
# 1. Clone project
git clone https://github.com/[your-repo]/itctkb.git
cd itctkb/ITCTKB-ReactNative

# 2. Cài dependencies
npm install

# 3. Export native code
npx expo prebuild

# 4. Cài iOS dependencies
cd ios
pod install
cd ..

# 5. Mở Xcode
open ios/ITCTKB.xcworkspace

# 6. Build trong Xcode
# Product → Archive → Export IPA
```

---

## 💡 So sánh các cách:

| Cách | Thời gian | Độ khó | Chi phí |
|------|-----------|--------|---------|
| **EAS Build** | 20 phút | ⭐ Dễ | Miễn phí |
| **Hackintosh** | 4-8 giờ | ⭐⭐⭐⭐⭐ Rất khó | Miễn phí |
| **Mac Cloud** | 1 giờ | ⭐⭐ Trung bình | $1-2/giờ |
| **Mua Mac Mini** | 0 | ⭐ Dễ | $599 |

---

## 🎯 Khuyến nghị của tôi:

### ✅ Dùng EAS Build (Đã fix ở trên):

```bash
cd D:\AppIOS\ITCTKB-ReactNative
eas build --platform ios --profile preview
```

**Ưu điểm:**
- ✅ Chỉ 1 lệnh
- ✅ 20 phút có IPA
- ✅ Không cần cài gì
- ✅ Build trên cloud
- ✅ Miễn phí

**Hackintosh:**
- ❌ Mất 4-8 giờ
- ❌ Rất khó
- ❌ Có thể không tương thích
- ❌ Nhiều lỗi

---

## 🔗 Resources nếu vẫn muốn thử:

**Hướng dẫn Hackintosh:**
- Olarila: https://www.olarila.com
- Dortania Guide: https://dortania.github.io
- r/hackintosh: https://reddit.com/r/hackintosh
- TonyMacx86: https://www.tonymacx86.com

**Cộng đồng Việt Nam:**
- Facebook: "Hackintosh Vietnam"
- Discord: Hackintosh VN

---

## 🎯 Quyết định:

**Nếu chỉ muốn build IPA:**
→ Dùng **EAS Build** (đã fix ở trên)

**Nếu muốn học Hackintosh:**
→ Chuẩn bị 1 ngày cuối tuần để thử

**Nếu cần macOS thường xuyên:**
→ Mua Mac Mini cũ (~$300-400)

---

Tôi khuyên bạn dùng EAS Build vì:
1. Đã fix config xong
2. Chỉ cần 1 lệnh
3. 20 phút có IPA
4. Không rủi ro

Bạn muốn build bằng EAS ngay không? 🚀
