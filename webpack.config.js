var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development', // ou 'production' dependendo do ambiente
  entry: path.join(__dirname, 'assets/src/js/index'),
  output: {
    path: path.join(__dirname, 'assets/dist'),
    filename: '[name]-[fullhash].js' // Atualizado para usar [fullhash]
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
