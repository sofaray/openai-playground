/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
