const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new MonacoWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['syntax-dynamic-import']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './public'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: './public'
    }
};
