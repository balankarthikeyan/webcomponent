const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
     mode: 'production', 
    entry: "./src/App/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist'),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            
            {
              test: /\.css$/,
              use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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

    devServer: {
      /* contentBase: path.resolve(__dirname, '../dist'), */
      port: 9000,
      compress: true,
    }, 

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/App/index.html',
      }),
    ],
};