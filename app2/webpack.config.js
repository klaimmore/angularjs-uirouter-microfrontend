const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "system"
  },
  target: ["web", "es5"],
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { insert: '#main' }
          }, 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }
    ]
  }
};