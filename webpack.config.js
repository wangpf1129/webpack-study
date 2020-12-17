var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Wang-pf',
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [{
      test: /\.css$/i, // 以 .css 结尾的
      use: ["style-loader", "css-loader"], // 用这俩个插件
    }, ],
  },
  devServer: {
    contentBase: './dist'
  },
};