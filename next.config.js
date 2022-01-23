module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = {};
