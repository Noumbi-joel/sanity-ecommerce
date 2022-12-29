/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    NEXT_SANITY_STRIPE_PRIVATE_KEY: process.env.NEXT_SANITY_STRIPE_PRIVATE_KEY,
    NEXT_SANITY_STRIPE_PUBLIC_KEY: process.env.NEXT_SANITY_STRIPE_PUBLIC_KEY,
  },
};
