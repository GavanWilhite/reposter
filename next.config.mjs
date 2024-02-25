/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/originals',
        destination: 'https://docs.google.com/presentation/d/1JUhIfgfWp6_M92OQmNMR01qYqPQUhxywCLDYy7qK-uk/edit?usp=sharing',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
