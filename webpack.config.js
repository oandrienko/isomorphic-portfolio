const path = require('path');
const crypto = require('crypto');
const webpack = require('webpack');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

// paths for builds
const rootPath = __dirname;
const PATHS = {
    root: rootPath,
    app: path.join(rootPath, 'src'),
    styles: path.join(rootPath, 'src/styles'),
    build: path.join(rootPath, 'build'),
    public: path.join(rootPath, 'public'),
    bundles: path.join(rootPath, 'public/bundles'),
    templates: path.join(rootPath, 'templates')
};
const buildHash = crypto.randomBytes(20).toString('hex');


/**
 * Getter for webpack config for all the different kind of builds there is in this repo
 * @param  {Object} options        Passed from building, starting and testing the application
 * @param  {Object} privateOptions Only passed from `getServerString`, used to add some private options relevent only to this file
 * @return {Object}                Webpack config object
 */
const getWebpackConfig = (options = ({}), privateOptions = ({})) => {
    const {
        isProd = false,
        isWebpackDevServer = false,
        port = 8080,
        bail = false,
        globals = ({})
    } = options;

    const {
        isClientBuild = true
    } = privateOptions;

    const appBundle = `app-${buildHash}${isProd ? '.min' : ''}`;
    const vendorBundle = `vendor-${buildHash}${isProd ? '.min' : ''}`;

    return ({
        // if is watching report first error
        bail,

        target: undefined,

        devtool: isProd ? false : 'source-map',

        entry: {

            [appBundle]: [
                PATHS.app + '/app.jsx',
                PATHS.app + '/styles/styles.scss',
                'contact-bot/lib/styles.css',
                'contact-bot/lib/loader.gif'
            ],

            [vendorBundle]: [
                'react',
                'react-dom',
                'jquery'
            ]
        },

        output: {
            path: PATHS.bundles,
            filename: '[name].js',
            publicPath: isWebpackDevServer ? `http://localhost:${port}/static/` : '/bundles',
            libraryTarget: isClientBuild ? undefined : 'umd'
        },

        plugins: []
            .concat(!isWebpackDevServer && isClientBuild ? [

                new CleanWebpackPlugin([PATHS.build, PATHS.bundles], {
                    root: process.cwd()
                })

            ] : [])
            .concat([

                new ExtractTextPlugin(`[name].css`),

                new webpack.DefinePlugin(
                    Object.assign({
                        __PROD__: JSON.stringify(isProd),
                        __DEV__: JSON.stringify(!isProd),
                        __DEVSERVER__: JSON.stringify(isWebpackDevServer),
                        __DEVTOOLS__: JSON.stringify(isWebpackDevServer),
                        __CLIENT__: JSON.stringify(isClientBuild),
                        __SERVER__: JSON.stringify(!isClientBuild),
                        'process.env': {
                            BROWSER: JSON.stringify(true),
                            NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
                        }
                    }, Object.keys(globals).reduce( // Stringify all the globals
                        (obj, k) => Object.assign(obj, {
                            [k]: JSON.stringify(globals[k])
                        }),
                        {}
                    ))
                ),

                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                }),

                // new TransferWebpackPlugin([{
                //     from: 'node_modules/contact-bot/lib'
                // }])

            ])
            .concat(isWebpackDevServer ? [

                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin()

            ] : [])
            .concat(isProd ? [

                new HtmlWebpackPlugin({
                    favicon: PATHS.public + '/images/icons/favicon.ico',
                    filename: PATHS.templates + '/index.hbs',
                    template: PATHS.templates + '/base.html',
                    chunks: [appBundle, vendorBundle]
                }),

                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                        drop_console: true
                    },
                    mangle: {
                        except: ['$', 'webpackJsonp']
                    }
                })

            ] : [

                new HtmlWebpackPlugin({
                    title: '*HMR* WEBPACK DEV',
                    filename: PATHS.templates + '/index.hbs',
                    template: PATHS.templates + '/base-dev.html',
                    chunks: [appBundle, vendorBundle]
                })

            ]),

        module: {
            loaders: [
                // scripts
                {
                    test: /(\.js|\.jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015'].concat(isWebpackDevServer ? ['react-hmre'] : []),
                            plugins: [
                                'transform-class-properties',
                                'transform-object-rest-spread',
                                'transform-decorators-legacy'
                            ].concat(!isProd ? ['react-hot-loader/babel'] : [])
                        }
                    }]
                },
                // styles
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })

                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
                },
                // fonts
                {
                    test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                    loader: `url-loader?mimetype=application/font-woff?emitFile=false`
                },
                {
                    test: /\.(ttf|eot|svg|gif)(\?v=[0-9].[0-9].[0-9])?$/,
                    loader: `file-loader?name=[name].[ext]?emitFile=false`
                },
                // {
                //     test: /\.(ttf|eot|svg|gif)(\?v=[0-9].[0-9].[0-9])?$/,
                //     loader: `file-loader?name=[name].[ext] `
                // }
            ]
        },

        resolve: {
            modules: [
                path.join(rootPath, 'node_modules')
            ],
            alias: {
                stylesRoot: PATHS.styles,
                appRoot: PATHS.app,
                root: PATHS.root
            },
            extensions: ['.js', '.jsx', 'scss', '.json']
        }
    });
};

module.exports = getWebpackConfig;
