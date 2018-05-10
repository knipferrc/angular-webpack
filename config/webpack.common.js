const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NgCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const path = require('path')
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

const basePath = __dirname
const targetPath = '../'

module.exports = {
  entry: {
    app: './src/app/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: basePath + '/' + targetPath
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      output: path.resolve(__dirname, '../dist'),
      inject: true,
      minify: true,
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new NgCompilerPlugin({
      tsConfigPath: 'tsconfig.json',
      mainPath: 'src/app/main.ts',
      sourceMap: true,
      skipCodeGeneration: true
    })
  ]
}
