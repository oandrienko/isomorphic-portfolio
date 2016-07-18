var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  root: __dirname,
  styles: path.join(__dirname, 'app/styles'),
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public/bundles')
};

module.exports = {
  entry: {
    app: PATHS.app + '/client',
    vendor: ['react', 'react-dom', 'jquery']
  },
  target: 'node',
  output: {
    path: PATHS.build,
    filename: '[name]-[hash].js',
    publicPath: '/bundles/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss', '.json'],
    alias: {
      stylesRoot: PATHS.styles,
      appRoot: PATHS.app,
      root: PATHS.root
    }
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: PATHS.root + '/templates/index.hbs',
      template: PATHS.root + '/templates/base.html'
    }),
    new CleanWebpackPlugin([PATHS.build], {
      root: process.cwd()
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      mangle: {
        except: ['$', 'webpackJsonp']
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        // to require styles with webpack
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin('app-[hash].css')
  ],
  postcss: [
    require('autoprefixer')
  ]
};

/* webpack -p --config ./webpack.production.config.js */