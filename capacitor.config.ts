import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.tambolanow.app',
  appName: 'Tambola Now',
  webDir: 'www',
  server: {
    // During development, point to the live Vercel URL so you don't
    // need to copy the build every time. Remove this before App Store submission.
    url: 'https://tambola-os2acvwuc-rajpappalas-projects.vercel.app',
    cleartext: false,
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0f172a',
  },
}

export default config
