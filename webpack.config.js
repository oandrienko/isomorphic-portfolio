var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  root: __dirname,
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'assets/bundles')
};

//TODO: Add production plugins

module.exports = {
  entry: {
    app: PATHS.app + '/js/app',
    vendor: ['react', 'react-dom', 'jquery']
  },
  output: {
    path: PATHS.build,
    filename: '[name][hash].js'
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
        //for import use from css-loader --> @import "./variables.scss";
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss!sass-loader'
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
    })
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
  devtool: 'source-map'
};

/* webpack --watch */
/* webpack -p  for minification */
/*webpack-dev-server --inline --hot for HMR*/