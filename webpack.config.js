var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: {
        dev: "webpack-dev-server/client?http://localhost:8080",
        bundle: ['babel-polyfill', './example/index.jsx'],
        vendor: ['react','react-dom'],
        style: ['./src/style/index.sass']
    },
    output: {
        path: path.join(__dirname , './build'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['','.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
            { task: /\.sass$/, loader: 'css!sass'}
        ]
    },
    plugins: [
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    path: path.join(__dirname , './build'),
                    publicPath: '/',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }),
                commonsPlugin,
                new webpack.HotModuleReplacementPlugin( {hot: true} )]
};
