var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  root: __dirname,
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'assets/bundles')
};

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
      filename: 'index.html',
      template: 'base.html'
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
  }
};

//for minification run
/* webpack -p  */

// module.exports = {
//   context: __dirname,
//   entry: { mainConfig: PATHS.scripts + '/config.jsx', sample1: PATHS.scripts + '/sample.js'},
//   output: {
//     path: PATHS.dist,
//     filename: 'bundle.js'
//   }
// };

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');

// module.exports = {
//   entry: { general: "./scripts"},
//   output: {
//   	path: '/dist/js',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },
//       { test: /\.scss$/, loader: 'style-loader!css-loader!postcss!sass-loader' }
//     ]
//   },
//   postcss: [
//     require('autoprefixer')
//   ],
//   plugins: [
//     new webpack.BannerPlugin("Copyright Oles Andrienko"),
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'Welcome - Oles Andrienko',
//       template: 'index.html',
//     }),
//     new HtmlWebpackPlugin({
//       title: 'About - Oles Andrienko',
//       template: 'templates/about.html',
//     }),
//     new HtmlWebpackPlugin({
//       title: 'Projects - Oles Andrienko',
//       template: 'templates/projects.html',
//     }),
//     new HtmlWebpackPlugin({
//       title: 'Links - Oles Andrienko',
//       template: 'templates/links.html',
//     }),
//   ],
//   devServer: {
//     contentBase: "./dist",
//     colors: true,
//     historyApiFallback: true,
//     inline: true,
//     hot: true,
//   },
//   watch: true
// };

/* webpack */
/* webpack --watch */
/*webpack-dev-server --inline --hot for HMR*/