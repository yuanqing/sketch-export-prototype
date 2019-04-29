import { resolve } from 'path'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

const bundleFileName = 'script.js'
const entryFilePath = './src/app/app.js'
const outputDirectory = 'build'

const isDevelopment = process.env.NODE_ENV === 'development'
const mode = isDevelopment ? 'development' : 'production'

const webpackConfig = {
  mode,
  entry: entryFilePath,
  output: {
    path: resolve('.', outputDirectory),
    filename: bundleFileName
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
  stats.hasErrors() ? reject(stats.toString()) : resolve()
})
