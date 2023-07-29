const path = require('path');

module.exports = {
  // ... other Webpack configurations ...
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // ... other Webpack configurations ...
};
