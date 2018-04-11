const path = require('path')

const assets = require('./assets')
const services = require('./services')

const common = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      '@front': path.resolve(__dirname, '..', 'src', 'front'),
      '@back': path.resolve(__dirname, '..', 'src', 'back'),
      '@api': path.resolve(__dirname, '..', 'src', 'back', 'api'),
      '@ssr': path.resolve(__dirname, '..', 'src', 'back', 'ssr')
    }
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: true
            }
          }
        ]
      },

      // TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
          {
            loader: 'tslint-loader',
            options: { failOnHint: true }
          }
        ]
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]__[hash:base64:5]',
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: loader => [
                require('postcss-cssnext')(),
                require('postcss-normalize')({ forceImport: true })
              ]
            }
          }
        ]
      }
    ]
  }
}

module.exports = [
  { ...common, ...assets },
  { ...common, ...services('api') },
  { ...common, ...services('ssr') }
]
