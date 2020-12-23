const path = require('path');

module.exports = {
  stories: ["../**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../src/');
    config.resolve.alias['^'] = path.resolve(__dirname, '../');
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config;
  },
};
