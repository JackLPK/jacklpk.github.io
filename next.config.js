/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    // Export does not support default optimizer
    unoptimized: true,
  },
  /* Disable below for next/image SVG */
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   })
  //   return config
  // },
  trailingSlash: true,
}

module.exports = nextConfig
