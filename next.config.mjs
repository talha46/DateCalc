/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.datecalc.xyz' }],
        destination: 'https://datecalc.xyz/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
