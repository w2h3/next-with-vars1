module.exports = {
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
