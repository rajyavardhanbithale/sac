const { webpackPlugin } = require('unplugin-tailwindcss-mangle');

module.exports = {
  webpack: (config) => {
    config.plugins.push(webpackPlugin());

    return config;
  },
};