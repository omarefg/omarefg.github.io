const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpg|png|gif|woff|woff2|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            esModule: false
          }
        }
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
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './index.html',
        filename: './index.html'
      }
    )
  ]
}
