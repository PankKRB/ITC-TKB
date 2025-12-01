# 🚀 Build IPA miễn phí với Codemagic

## ✨ Codemagic là gì?

**Codemagic.io** - CI/CD platform build iOS/Android app miễn phí!

**Ưu điểm:**
- ✅ **500 phút build/tháng MIỄN PHÍ**
- ✅ Build trên Mac cloud (không cần Mac)
- ✅ Tự động build khi push code
- ✅ Hỗ trợ React Native, Flutter, Native
- ✅ Không cần Apple Developer account ($99)

---

## 🎯 Bước 1: Push code lên GitHub

```bash
cd D:\AppIOS\ITCTKB-ReactNative

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[your-username]/itctkb-app.git
git push -u origin main
```

---

## 🎯 Bước 2: Đăng ký Codemagic

1. Truy cập: https://codemagic.io
2. Click **"Sign up for free"**
3. Đăng nhập bằng **GitHub**
4. Cho phép Codemagic truy cập repos

---

## 🎯 Bước 3: Thêm app vào Codemagic

1. Click **"Add application"**
2. Chọn **GitHub**
3. Chọn repo **itctkb-app**
4. Click **"Finish: Add application"**

---

## 🎯 Bước 4: Cấu hình build

### 4.1. Chọn workflow type

1. Click **"Start your first build"**
2. Chọn **"React Native App"**
3. Click **"Select"**

### 4.2. Cấu hình iOS build

1. **Build for platforms**: Chọn **iOS**
2. **iOS code signing**: Chọn **"Automatic"**
3. **Bundle identifier**: `com.hoangkiet.itctkb`

### 4.3. Thêm Apple ID

1. Click **"Add Apple Developer Portal credentials"**
2. Nhập **Apple ID** (miễn phí)
3. Nhập **Password**
4. Nhập **2FA code**
5. Click **"Save"**

---

## 🎯 Bước 5: Tạo codemagic.yaml

Tạo file `codemagic.yaml` trong thư mục gốc:

```yaml
workflows:
  react-native-ios:
    name: React Native iOS
    max_build_duration: 60
    instance_type: mac_mini_m1
    environment:
      groups:
        - app_store_credentials
      vars:
        XCODE_WORKSPACE: "ios/ITCTKB.xcworkspace"
        XCODE_SCHEME: "ITCTKB"
        BUNDLE_ID: "com.hoangkiet.itctkb"
      node: 18
      xcode: latest
      cocoapods: default
    scripts:
      - name: Install npm dependencies
        script: |
          npm install
      - name: Install CocoaPods dependencies
        script: |
          cd ios && pod install
      - name: Build iOS
        script: |
          xcode-project build-ipa \
            --workspace "$XCODE_WORKSPACE" \
            --scheme "$XCODE_SCHEME"
    artifacts:
      - build/ios/ipa/*.ipa
    publishing:
      email:
        recipients:
          - your-email@example.com
```

---

## 🎯 Bước 6: Start build

1. Click **"Start new build"**
2. Chọn branch **main**
3. Click **"Start new build"**

Build sẽ mất ~15-20 phút.

---

## 📥 Bước 7: Download IPA

Sau khi build xong:

1. Vào **"Builds"** tab
2. Click vào build mới nhất
3. Scroll xuống **"Artifacts"**
4. Download file **IPA**

---

## 📱 Bước 8: Cài IPA lên iPhone

### Cách 1: Sideloadly (Windows)

1. Tải: https://sideloadly.io
2. Kéo file IPA vào
3. Nhập Apple ID
4. Cài lên iPhone

### Cách 2: AltStore

1. Cài AltStore: https://altstore.io
2. Cài AltStore lên iPhone
3. Import IPA vào AltStore
4. Cài đặt

---

## 🔄 Auto build khi push code

Codemagic tự động build mỗi khi bạn push code:

```bash
# Sửa code
# ...

# Commit và push
git add .
git commit -m "Update: Thêm tính năng mới"
git push

# Codemagic tự động build!
```

---

## 💰 Giới hạn miễn phí

**Free tier:**
- ✅ 500 phút build/tháng
- ✅ 1 concurrent build
- ✅ Unlimited apps
- ✅ Unlimited team members

**Đủ để:**
- ~25-30 builds/tháng
- Personal projects
- Small teams

---

## 🎯 So sánh với EAS

| Tính năng | Codemagic | EAS Build |
|-----------|-----------|-----------|
| Miễn phí | 500 phút/tháng | 30 builds/tháng |
| Build time | ~15-20 phút | ~15-20 phút |
| Cần Mac | ❌ | ❌ |
| Auto build | ✅ | ✅ |
| Setup | Phức tạp hơn | Đơn giản hơn |

---

## 🔧 Troubleshooting

### Lỗi: "No provisioning profile"

1. Vào Codemagic dashboard
2. Settings → Code signing
3. Add Apple Developer credentials
4. Retry build

### Lỗi: "Pod install failed"

Thêm vào `codemagic.yaml`:
```yaml
scripts:
  - name: Install CocoaPods
    script: |
      gem install cocoapods
      cd ios && pod install
```

### Lỗi: "Xcode version not found"

Đổi trong `codemagic.yaml`:
```yaml
environment:
  xcode: 15.0
```

---

## 📋 Checklist

- [ ] Push code lên GitHub
- [ ] Đăng ký Codemagic
- [ ] Kết nối GitHub repo
- [ ] Thêm Apple ID credentials
- [ ] Tạo file codemagic.yaml
- [ ] Start build
- [ ] Download IPA
- [ ] Cài lên iPhone

---

## 🎉 Kết quả

Sau khi setup xong:
- ✅ Build IPA tự động khi push code
- ✅ Không cần Mac
- ✅ Miễn phí 500 phút/tháng
- ✅ Download IPA và cài lên iPhone

---

## 🔗 Links

- Codemagic: https://codemagic.io
- Docs: https://docs.codemagic.io
- React Native guide: https://docs.codemagic.io/yaml-quick-start/building-a-react-native-app/

---

Bạn muốn tôi tạo file `codemagic.yaml` chi tiết hơn không? 🚀
