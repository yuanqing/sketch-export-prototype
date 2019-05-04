import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import {
  inputJsFilePath,
  outputCssFile,
  outputDirectoryPath,
  outputJsFile
} from './constants'

export default async function buildBundle ({ isDevelopment } = {}) {
  const mode = isDevelopment ? 'development' : 'production'
  const webpackConfig = {
    mode,
    entry: inputJsFilePath,
    output: {
      path: outputDirectoryPath,
      filename: outputJsFile
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    devtool: isDevelopment ? 'source-map' : 'none',
    target: 'web',
    stats: 'errors-only',
    plugins: [
      new MiniCssExtractPlugin({
        filename: outputCssFile
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    }
  }
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (error) {
        console.error(error.details)
      }
      if (stats.hasErrors()) {
        console.error(stats.toJson())
      }
      stats.hasErrors() ? reject(stats.toString()) : resolve()
    })
  })
}
