const path = require('path');
const packagejson = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const dashLibraryName = packagejson.name.replace(/-/g, '_');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

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
                    test: /\.jsx?$/,
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
                    loader: 'url-loader?limit=100000',
                },
            ],
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true,
                    parallel: true,
                    cache: './.build_cache/terser',
                    terserOptions: {
                        warnings: false,
                        ie8: false,
                    },
                }),
            ],
            splitChunks: {
                name: true,
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
