const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mapStyle = process.env.MAP_STYLE === 'true'

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: mapStyle ? 'css-loader?sourceMap' : 'css-loader',
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.TARGET': JSON.stringify('halifax'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
})
