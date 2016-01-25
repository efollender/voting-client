var webpack = require('webpack');

module.exports = {
  entry: [
  	'webpack-dev-server/client?http://localhost:4040',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 4040,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};