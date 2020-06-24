var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"]
  }
]
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules
  },
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}