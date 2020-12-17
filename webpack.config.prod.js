const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
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
    rules: [{
      test: /\.css$/i, // 以 .css 结尾的
      use: ["style-loader", "css-loader"],
    }, ],
  },
  devServer: {
    contentBase: './dist'
  },
};