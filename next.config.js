/** @type {import('next').NextConfig} */
module.exports = {

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },

  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['localhost', 'media.rawg.io'],
  },
}
