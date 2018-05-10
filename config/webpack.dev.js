const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    overlay: true,
    open: true,
    inline: true
  }
})
