import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ];
  },
});
