const common = require('./webpack.common')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin()
  ]
})
