# Tambola Now — Mobile

Capacitor wrapper for the [Tambola Now](https://github.com/rajpappala/tambola-now) PWA.
Packages the web app as a native iOS and Android app for App Store / Google Play distribution.

## Web app
- **Repo**: https://github.com/rajpappala/tambola-now
- **Live**: https://tambola-os2acvwuc-rajpappalas-projects.vercel.app

## Setup

```bash
npm install
```

### iOS (requires Mac + Xcode + Apple Developer account)

```bash
# First time — add iOS platform
npx cap add ios

# Development (loads live Vercel URL)
npm run open:ios

# Production build (bundle the built web app)
npm run deploy:ios
```

### Android (requires Android Studio)

```bash
# First time — add Android platform
npx cap add android

# Open in Android Studio
npm run open:android
```

## Workflow

1. Make changes in `tambola-now` (web repo)
2. Push → Vercel auto-deploys
3. Development: open this repo in Xcode/Android Studio — it loads the live URL
4. App Store release: run `npm run deploy:ios` to bundle the latest build

## App IDs

| Platform | ID |
|---|---|
| iOS Bundle ID | `com.tambolanow.app` |
| Android Package | `com.tambolanow.app` |
