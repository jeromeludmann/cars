exports.js = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
    {
      loader: 'eslint-loader',
      options: {
        failOnWarning: false,
        failOnError: false
      }
    }
  ]
}

exports.ts = {
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
}

exports.css = {
  test: /\.s?css$/,
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
    },
    {
      loader: 'sass-loader'
    }
  ]
}
