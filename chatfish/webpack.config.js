const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');
const PORT = parseInt(process.env.PORT, 10) || 8080;


module.exports = {
    devServer: {
        contentBase: dist,
        hot: true,
        port: PORT,
        publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/only-dev-server',
        path.join(src, 'index.js')
    ],
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new CopyWebpackPlugin([
      		{
       		from: path.resolve(__dirname, 'assets'),
       		to: path.resolve(__dirname, 'dist', 'assets'),
     		}
   		 ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    externals: {
        firebase: 'firebase'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                include: src,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /.js$/,
                include: src,
                loader: 'babel-loader'
            }
        ]
    }
};
