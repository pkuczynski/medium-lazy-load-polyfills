const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const contentBase = path.resolve(__dirname, 'public')

module.exports = {
  entry: {
    app: './src'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/u,
        exclude: /node_modules/u,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase,
    host: '0.0.0.0',
    inline: true,
    publicPath: '/',
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(contentBase, 'index.html')
    })
  ]
}
