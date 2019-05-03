import { basename, dirname } from 'path'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

import { prototypeViewerEntryFile, prototypeViewerJsFile } from '../constants'

const isDevelopment = process.env.NODE_ENV === 'development'
const mode = isDevelopment ? 'development' : 'production'

const webpackConfig = {
  mode,
  entry: prototypeViewerEntryFile,
  output: {
    path: `${process.cwd()}/resources/${dirname(prototypeViewerJsFile)}`,
    filename: basename(prototypeViewerJsFile)
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
      }
    ]
  },
  devtool: isDevelopment ? 'source-map' : 'none',
  target: 'web',
  stats: 'errors-only',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
}

webpack(webpackConfig, function (error, stats) {
  if (error) {
    console.error(error.details)
  }
  if (stats.hasErrors()) {
    console.error(stats.toJson())
  }
})
