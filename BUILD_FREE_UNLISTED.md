# 🆓 Build IPA FREE - Unlisted App Distribution

## ✨ What is Unlisted App Distribution?

Apple's **FREE** way to distribute apps without paying $99/year!

**Features:**
- ✅ **100% FREE** - No Apple Developer Program needed
- ✅ **No time limit** - App works forever (not just 7 days)
- ✅ **Share with up to 10,000 users** via link
- ✅ **Install via TestFlight** - Official Apple app
- ✅ **No Mac required** - Build on Expo cloud

**Requirements:**
- Free Apple ID
- Expo account (free)

---

## 🚀 Step-by-Step Guide

### Step 1: Prepare on Windows

```bash
cd D:\AppIOS\ITCTKB-ReactNative

# Make sure logo.png exists in assets folder
# If not, convert logo.jpg to PNG 1024x1024px first
```

### Step 2: Install EAS CLI

```bash
npm install -g eas-cli
```

### Step 3: Login to Expo

```bash
eas login
```

### Step 4: Configure Project

```bash
eas build:configure
```

When asked:
- "Would you like to automatically create an EAS project?" → **Yes**

### Step 5: Update eas.json for Unlisted Distribution

Already configured! Your `eas.json` is ready.

### Step 6: Build IPA

```bash
eas build --platform ios --profile preview
```

**Important:** When asked about Apple ID:
- Enter your **FREE Apple ID** (iCloud email)
- Enter password
- Enter 2FA code if prompted

Build will take ~15-20 minutes.

### Step 7: Get the IPA

After build completes:
1. Go to: https://expo.dev
2. Select project "itctkb"
3. Click "Builds" tab
4. Download the `.ipa` file

---

## 📱 Install on iPhone

### Method 1: TestFlight (Recommended)

1. **Submit to TestFlight:**
```bash
eas submit --platform ios
```

2. **Accept Apple's terms:**
   - Go to: https://appstoreconnect.apple.com
   - Accept agreements if prompted

3. **Wait for processing** (~10-30 minutes)

4. **Get TestFlight link:**
   - Go to App Store Connect
   - Select your app
   - Go to TestFlight tab
   - Copy the public link

5. **Install on iPhone:**
   - Open link on iPhone
   - Install TestFlight app (if not installed)
   - Install your app

### Method 2: Direct Install (Without TestFlight)

**On Mac:**
1. Download Apple Configurator 2 from App Store
2. Connect iPhone via USB
3. Drag & drop `.ipa` file

**On Windows:**
1. Use Sideloadly: https://sideloadly.io
2. Connect iPhone via USB
3. Drag & drop `.ipa` file
4. Enter Apple ID
5. Click Start

---

## 🔄 Update App

When you make changes:

```bash
# 1. Update version in app.json
# Change "version": "1.0.0" to "1.0.1"

# 2. Build again
eas build --platform ios --profile preview

# 3. Submit to TestFlight
eas submit --platform ios
```

Users will get update notification in TestFlight.

---

## 💰 Cost Comparison

| Method | Cost | Time Limit | Users |
|--------|------|------------|-------|
| **Unlisted App** | **FREE** | **Forever** | **10,000** |
| Xcode Free Signing | FREE | 7 days | 1 (you only) |
| Apple Developer | $99/year | Forever | Unlimited |
| Expo Go | FREE | Forever | Unlimited |

---

## 🎯 Complete Commands

```bash
# One-time setup
npm install -g eas-cli
eas login
cd D:\AppIOS\ITCTKB-ReactNative
eas build:configure

# Build IPA (FREE!)
eas build --platform ios --profile preview

# Submit to TestFlight (FREE!)
eas submit --platform ios

# Check build status
eas build:list

# View specific build
eas build:view [BUILD_ID]
```

---

## 📋 Checklist

- [ ] Logo.png exists in assets folder (1024x1024px)
- [ ] EAS CLI installed
- [ ] Logged into Expo
- [ ] Free Apple ID ready
- [ ] Run `eas build --platform ios --profile preview`
- [ ] Wait 15-20 minutes
- [ ] Download IPA from expo.dev
- [ ] Submit to TestFlight with `eas submit --platform ios`
- [ ] Install via TestFlight link

---

## ⚠️ Troubleshooting

### "No Apple Developer account"
- Use your **FREE Apple ID** (iCloud email)
- Don't need paid Developer account

### "Build failed"
- Check logs: `eas build:view [BUILD_ID]`
- Make sure logo.png exists
- Try again: `eas build --platform ios --profile preview`

### "Cannot submit to TestFlight"
- Go to https://appstoreconnect.apple.com
- Accept all agreements
- Try again: `eas submit --platform ios`

---

## 🎉 Result

After following this guide, you'll have:
- ✅ IPA file built for FREE
- ✅ App on TestFlight (FREE)
- ✅ Shareable link to install
- ✅ No time limit
- ✅ No $99 payment needed

---

## 🔗 Useful Links

- Expo Dashboard: https://expo.dev
- App Store Connect: https://appstoreconnect.apple.com
- TestFlight: https://testflight.apple.com
- Expo Docs: https://docs.expo.dev/build/introduction/

---

Ready to build? Run this command:

```bash
eas build --platform ios --profile preview
```

🚀 Good luck!
