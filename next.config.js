/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.boringavatars.com',
        port: '',
        pathname: '/beam/**/*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4001',
        pathname: '/uploads/**/*',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
