const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp|webm|mp4|ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[hash].[ext]',
              outputPath: 'assets',
              esModule: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true
  },
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CompressionPlugin(),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './index.html',
        filename: './index.html'
      }
    )
  ]
}
