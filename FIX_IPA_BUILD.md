# 🔧 Fix: Build IPA thay vì .app file

## ❌ Vấn đề:

Bạn đang build **iOS Simulator** (file .app) thay vì **iPhone device** (file .ipa)

## ✅ Giải pháp:

### Bước 1: Kiểm tra eas.json

File `eas.json` của bạn có dòng này:
```json
"ios": {
  "simulator": true  // ← ĐÂY LÀ VẤN ĐỀ!
}
```

### Bước 2: Sửa eas.json

Xóa dòng `"simulator": true` hoặc đổi thành `false`:

```json
{
  "build": {
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": false
      }
    }
  }
}
```

### Bước 3: Build lại

```bash
eas build --platform ios --profile preview --clear-cache
```

Lần này bạn sẽ được hỏi:
- **Apple ID** → Nhập Apple ID miễn phí của bạn
- **Password** → Nhập password
- **2FA code** → Nhập mã xác thực

### Bước 4: Đợi build xong

Sau ~15-20 phút, bạn sẽ nhận được file **IPA** (không phải tar.gz)!

---

## 📱 Cài IPA lên iPhone

### Cách 1: TestFlight (Khuyên dùng - Miễn phí)

```bash
eas submit --platform ios
```

Sau đó cài qua TestFlight app.

### Cách 2: Sideloadly (Windows)

1. Tải Sideloadly: https://sideloadly.io
2. Kết nối iPhone qua USB
3. Kéo file `.ipa` vào Sideloadly
4. Nhập Apple ID
5. Click Start

---

## 🎯 Tóm tắt:

**Lỗi của bạn:**
- Build với `"simulator": true` → Tạo file `.app` (chỉ cho Simulator)

**Cách fix:**
- Xóa `"simulator": true` → Tạo file `.ipa` (cho iPhone thật)

**Lệnh đúng:**
```bash
eas build --platform ios --profile preview
```

---

## ⚠️ Lưu ý:

**File .app:**
- Chỉ chạy trên iOS Simulator (trên Mac)
- Không cài được lên iPhone thật
- Không thể convert sang IPA

**File .ipa:**
- Cài được lên iPhone thật
- Cần Apple ID (miễn phí)
- Build bằng EAS với `simulator: false`

---

Chạy lại lệnh build với config đúng là xong! 🚀
