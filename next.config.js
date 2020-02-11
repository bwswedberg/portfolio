module.exports = {
  env: {
    API_URL: 'http://localhost:3000',
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
};