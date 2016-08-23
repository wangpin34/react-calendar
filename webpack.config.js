var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: {
        bundle: './example/index.jsx',
        vendor: ['react','react-dom']
    },
    output: {
        path: path.join(__dirname , './dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['','.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot','babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style','css','sass'] }
        ]
    },
    plugins: [
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    path: path.join(__dirname , './dist'),
                    publicPath: '/',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }),
                commonsPlugin,
                new webpack.HotModuleReplacementPlugin( {hot: true} )]
};
