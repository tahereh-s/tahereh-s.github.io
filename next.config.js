/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    output: 'export',
  },
  assetPrefix: './',
};

export default nextConfig;