var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    watchOptions: {
        poll: 1000 
    },
    cache: true,
    entry: {
        app: './src/app/index.tsx',
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader!ts-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                  removeComments: false,
                  collapseWhitespace: false,
                },
              },
            ],
          }
    ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/App/index.html',
          })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@atom': path.resolve(__dirname, 'src/component/atom')
          }
    },
    devServer: {
        inline:true,
        port: 9000,
        stats: 'errors-only',
      },
};
