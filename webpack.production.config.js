const path = require('path'),
      webpack = require('webpack'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: [
    './src/root.react.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            ['es2015', 'react'],
          ],
          plugins:[
            ['transform-react-jsx', { 'pragma': 'h' }],
          ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
