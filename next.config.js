/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "vibeaiimagegenerat07656a.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
