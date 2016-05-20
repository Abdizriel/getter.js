// These are the Webpack settings used when compiling the global version of the
// library.

module.exports = {
    resolve: {
        extensions: [ "", ".js", ".jsx", ]
        // add more extensions as needed.
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    babelrc: true,
                    plugins: [
                        'transform-es2015-modules-commonjs',
                    ],
                },
            },
            // add more loaders here as needed.
        ],
    },

    // Makes Webpack output source maps for each source file. These are for
    // convenience if you want to use them. You may have to modify the comment
    // at the end of each source file to point to the correct location on your
    // server where you'll serve the source maps from.
    devtool: "source-map",
}
