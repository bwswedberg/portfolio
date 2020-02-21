
const isDebug = process.env.NODE_ENV !== "production";

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  // assetPrefix: !isDebug ? '/portfolio/' : '', // https://github.com/zeit/next.js/issues/3335
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
};