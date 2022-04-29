const path = require('path');
const webpack = require('webpack');
const packagejson = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

// Remove scope name from package
// and replace '-' with '_'
const packageNameSplit = packagejson.name.split('/');
const packageNameWithoutScope = packageNameSplit[packageNameSplit.length - 1];
dashLibraryName = packageNameWithoutScope.replace(/-/g, '_');

module.exports = (env, argv) => {
    let mode;

    const overrides = module.exports || {};

    // if user specified mode flag take that value
    if (argv && argv.mode) {
        mode = argv.mode;
    }

    // else if configuration object is already set (module.exports) use that value
    else if (overrides.mode) {
        mode = overrides.mode;
    }

    // else take webpack default (production)
    else {
        mode = 'production';
    }

    let filename = (overrides.output || {}).filename;
    if (!filename) {
        const modeSuffix = mode === 'development' ? 'dev' : 'min';
        filename = `${dashLibraryName}.${modeSuffix}.js`;
    }

    const entry = overrides.entry || {main: './src/lib/index.js'};

    const devtool = overrides.devtool || 'source-map';

    const externals =
        'externals' in overrides
            ? overrides.externals
            : {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                  'plotly.js': 'Plotly',
                  'prop-types': 'PropTypes',
              };

    return {
        //plugins: [new BundleAnalyzerPlugin()], uncomment to see treemap of bundle
        plugins: [
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ],
        mode,
        entry,
        output: {
            path: path.resolve(__dirname, dashLibraryName),
            filename,
            library: dashLibraryName,
            libraryTarget: 'window',
        },
        devtool,
        externals,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                insertAt: 'top',
                            },
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        warnings: false,
                        ie8: false,
                    },
                }),
            ],
            splitChunks: {
                name: false,
                cacheGroups: {
                    shared: {
                        chunks: 'all',
                        minSize: 0,
                        minChunks: 2,
                        name: 'dash_mp_components-shared',
                    },
                },
            },
        },
    };
};
