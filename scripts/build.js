import webpack from 'webpack'

const merge = require('webpack-merge')
const prod = require('./config/webpack.prod.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const builds = JSON.parse(process.env.BUILD_TARGETS)

builds.map(TARGET => {
  const config = merge(prod, {
    output: {
      filename: 'bundle.js',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, process.env.BUILD_PATH, TARGET),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.TARGET': JSON.stringify(TARGET),
      }),
      new CleanWebpackPlugin(
        [path.resolve(__dirname, process.env.BUILD_PATH, TARGET)],
        {
          root: process.cwd(),
          verbose: true,
          dry: false,
        }
      ),
    ],
  })

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true, // Shows colors in the console
      })
    )
  })
})
