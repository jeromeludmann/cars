const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Cars: path.resolve(__dirname, "..", "src")
    }
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              localIdentName: "[local]__[hash:base64:5]",
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              ident: "postcss",
              plugins: loader => [
                require("postcss-cssnext")(),
                require("postcss-normalize")({ forceImport: true })
              ]
            }
          }
        ]
      }
    ]
  }
};
