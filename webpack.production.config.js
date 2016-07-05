var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
  root: __dirname,
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'assets/bundles')
};

//TODO: figure out how to deal with requiring styling in js files when running node

module.exports = {
  entry: {
    styles: PATHS.app + '/scss/styles.scss',
    app: PATHS.app + '/js/app',
    vendor: ['react', 'react-dom', 'jquery']
  },
  target: 'node',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss', '.json'],
    alias: {
      'appRoot': PATHS.app,
      'root': PATHS.root
    }
  },
  module: {
    loaders: [
      {
        //loaders: [ExtractTextPlugin.extract('style', 'css')], won't work
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /\.jsx$/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=react-hmre'],
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
      title: 'Webpack Test',
      filename: PATHS.app + '/templates/index.html',
      template: PATHS.app + '/templates/base.html'
    }),
    //for HMR in dev-server
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    //clean old build files
    new CleanWebpackPlugin([PATHS.build], {
      root: process.cwd()
    }),
    //minify files
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      mangle: {
        except: ['$', 'webpackJsonp']
      //  keep_fnames: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin('app.css'),
    // new webpack.IgnorePlugin(/\.(css|scss)$/),
  ],
  postcss: [
    require('autoprefixer')
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only'
  },
  devtool: 'eval-source-map'
};

/* webpack -p --config ./webpack.production.config.js */
/* webpack --watch */
/* webpack -p  for minification */
/*webpack-dev-server --inline --hot for HMR*/