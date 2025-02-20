/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Allow Tempo's development server
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  // Enable Tempo plugin if environment variable is set
  webpack: (config, { isServer }) => {
    if (process.env.NEXT_PUBLIC_TEMPO === "true" && !isServer) {
      config.plugins.push(require("tempo-devtools/webpack").default);
    }
    return config;
  },
};

module.exports = nextConfig;
