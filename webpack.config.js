const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.config.base.js')
module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
  ],
  module: {
    rules: [{
      test: /\.css$/i, // 以 .css 结尾的
      use: ["style-loader", "css-loader"], 
    }, ],
  },
};