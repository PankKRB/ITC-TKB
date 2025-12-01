# 📤 Đẩy code lên GitHub

## 🚀 Các bước thực hiện:

### Bước 1: Tạo repository trên GitHub

1. Truy cập: https://github.com/new
2. Điền thông tin:
   - **Repository name**: `itctkb-app`
   - **Description**: `ITC TKB - Thời khóa biểu app`
   - **Visibility**: Private (hoặc Public)
3. **KHÔNG** chọn "Add README" (đã có sẵn)
4. Click **"Create repository"**

---

### Bước 2: Khởi tạo Git (nếu chưa có)

```bash
cd D:\AppIOS\ITCTKB-ReactNative

# Khởi tạo git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - ITC TKB App"
```

---

### Bước 3: Kết nối với GitHub

```bash
# Thay [your-username] bằng username GitHub của bạn
git remote add origin https://github.com/[your-username]/itctkb-app.git

# Đổi branch sang main
git branch -M main
```

---

### Bước 4: Push lên GitHub

```bash
# Push code lên GitHub
git push -u origin main
```

Nếu hỏi username/password:
- **Username**: GitHub username của bạn
- **Password**: Dùng **Personal Access Token** (không phải password thường)

---

### Bước 5: Tạo Personal Access Token (nếu cần)

1. Vào: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Đặt tên: `ITCTKB App`
4. Chọn scope: **repo** (tất cả)
5. Click **"Generate token"**
6. **Copy token** (chỉ hiện 1 lần!)
7. Dùng token này làm password khi push

---

## 🔄 Update code sau này:

```bash
cd D:\AppIOS\ITCTKB-ReactNative

# Thêm files mới/đã sửa
git add .

# Commit với message
git commit -m "Update: Thêm tính năng XYZ"

# Push lên GitHub
git push
```

---

## 📋 Các lệnh Git hữu ích:

```bash
# Xem trạng thái
git status

# Xem lịch sử commit
git log --oneline

# Xem remote URL
git remote -v

# Đổi remote URL
git remote set-url origin https://github.com/[new-username]/[new-repo].git

# Pull code mới nhất
git pull

# Xem thay đổi
git diff
```

---

## 🎯 Cấu trúc repo sau khi push:

```
itctkb-app/
├── ITCTKB-ReactNative/
│   ├── App.js
│   ├── package.json
│   ├── app.json
│   ├── eas.json
│   ├── components/
│   ├── utils/
│   └── assets/
├── ITCTKB/ (Swift version - nếu có)
└── README.md
```

---

## ⚠️ Lưu ý:

**Không push:**
- ❌ `node_modules/` (đã có trong .gitignore)
- ❌ `.env` files (chứa secrets)
- ❌ `ios/` và `android/` folders (tự generate)

**Nên push:**
- ✅ Source code (`.js`, `.json`)
- ✅ Documentation (`.md`)
- ✅ Config files (`app.json`, `eas.json`)
- ✅ Assets (logo, images)

---

## 🔐 Bảo mật:

Nếu có thông tin nhạy cảm (API keys, tokens):

1. Tạo file `.env`:
```
EXPO_PROJECT_ID=your-project-id
API_KEY=your-api-key
```

2. Thêm vào `.gitignore`:
```
.env
.env.local
```

3. Tạo file `.env.example`:
```
EXPO_PROJECT_ID=your-project-id-here
API_KEY=your-api-key-here
```

---

## 🎉 Hoàn thành!

Sau khi push, code của bạn sẽ có tại:
```
https://github.com/[your-username]/itctkb-app
```

Bạn có thể:
- ✅ Clone về máy khác
- ✅ Chia sẻ với team
- ✅ Backup code
- ✅ Track changes

---

## 📱 Clone về máy khác:

```bash
# Clone repo
git clone https://github.com/[your-username]/itctkb-app.git

# Vào thư mục
cd itctkb-app/ITCTKB-ReactNative

# Cài dependencies
npm install

# Chạy app
npx expo start
```

---

Chúc bạn thành công! 🚀
