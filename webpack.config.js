const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
      },
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'public')
      },
    module: {
      rules: [
        {
          test: /\.html/,
          exclude: /(node_modules|bower_components)/,
          use: [{
                 loader: 'file-loader',
                 options: { name: '[name].[ext]' },
               }],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
