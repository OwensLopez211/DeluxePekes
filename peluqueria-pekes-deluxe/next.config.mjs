/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   turbo: {}
  // }
  eslint: {
    // Ignora warnings durante el build
    ignoreDuringBuilds: false,
    // Solo ejecuta en archivos específicos si es necesario
    dirs: ['src']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      }
    ]
  }
};

export default nextConfig;