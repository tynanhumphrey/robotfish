const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');


module.exports = {
    devtool: 'source-map',
    entry: path.join(src, 'index.js'),
    output: {
        filename: 'app.js',
        path: dist
    },
    resolve: {
        modules: [
            src,
            'node_modules'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                include: src,
                loader: 'babel-loader'
            }
        ]
    }
};
