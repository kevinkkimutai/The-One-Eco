/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "jp", "fr", "it"],
    defaultLocale: "en",
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ke.jumia.is',
      },
      {
        protocol: 'https',
        hostname: 'www.jumia.co.ke',
      },
      {
        protocol: 'https',
        hostname: 'www.kilimall.co.ke',
      }
    ],
  },
}

module.exports = nextConfig
