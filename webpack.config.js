const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.resolve('./src/index.jsx'),
  output: {
    path: path.resolve('./public'),
    filename: './app.js',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@modules': path.resolve('./node_modules'),
      '@settings': path.resolve('./settings.json'),
      '@config': path.resolve('./src/config'),
      '@general': path.resolve('./src/general'),
      '@home': path.resolve('./src/home'),
      '@dashboard': path.resolve('./src/dashboard'),
      '@workspace': path.resolve('./src/workspace'),
      '@channels': path.resolve('./src/channels'),
      '@terminals': path.resolve('./src/terminals')
    },
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new MonacoWebpackPlugin(),
    new FriendlyErrorsPlugin(),
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
              plugins: ['syntax-dynamic-import'],
            },
          },
        ],
      },
      {
        test: /\-worker\.js$/,
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
  stats: {
    children: false,
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
