const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: './app.js',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: `${__dirname}/node_modules`,
    },
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'style.css' }), new MonacoWebpackPlugin()],
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
              plugins: ['syntax-dynamic-import'],
            },
          },
        ],
      },
      {
        test: /\.wk\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'worker-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './public',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9000,
    contentBase: './public',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    historyApiFallback: true,
  },
};
