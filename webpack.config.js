var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  output: {
    path: PATHS.build,
    filename: '[name]-[hash].js',
    publicPath: '/assets/bundles/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss', '.json'],
    alias: {
      'stylesRoot': PATHS.styles,
      'appRoot': PATHS.app,
      'root': PATHS.root
    }
  },
  module: {
    loaders: [
      {
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
      filename: PATHS.root + '/templates/index.hbs',
      template: PATHS.root + '/templates/base.html'
    }),
    new HtmlWebpackPlugin({
      filename: PATHS.root + '/templates/index.html',
      template: PATHS.root + '/templates/base-dev.html'
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
    contentBase: 'templates',
    publicPath: '/assets/bundles/',
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