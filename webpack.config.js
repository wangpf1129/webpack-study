const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
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
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, // 忽略有关顺序冲突的警告
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/i, // 以 .css 结尾的
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // 你可以在这里指定特定的 publicPath
            // 默认情况下使用 webpackOptions.output 中的 publicPath
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development'
          },
        },
        'css-loader',
      ],
      // use: ["style-loader", "css-loader"], 
    }, ],
  },
  devServer: {
    contentBase: './dist'
  },
};