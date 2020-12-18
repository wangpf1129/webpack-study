const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wang-pf',
      template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"], // compiles Less to CSS
      },
      {
      test: /\.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            // `dart-sass` 是首选
            implementation: require("dart-sass"),
          },
        },
      ],
    }, ],
  },
};