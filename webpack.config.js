const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isDevMode = process.env.NODE_ENV !== 'production';
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
  devServer: {
    hot : true,
    inline: true,
    host: 'localhost',
    disableHostCheck: true,
    overlay: true,
    port: 3000,
    open : true,
    historyApiFallback: true,
    publicPath: 'http://react-typescript-boilerplate.com:8080/',
    contentBase: path.resolve(__dirname, '../src/assets'),
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isDevMode ? 'style-loader' : miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      pages: path.resolve(__dirname, './src/pages/'),
      components: path.resolve(__dirname, './src/components/'),
      thunks: path.resolve(__dirname, './src/store'),
      utils: path.resolve(__dirname, './src/utils')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  node: {
    fs: 'empty'
  }
};
