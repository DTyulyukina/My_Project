const path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'app' :      './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },    
      {
        test: /\.ts$/, // определяем тип файлов
        use: [
        {
             loader: 'awesome-typescript-loader',
             options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
           } ,
            'angular2-template-loader'
        ]
        }, 
        {
           test: /\.html$/,
           loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.resolve(__dirname, 'src'), // каталог с исходными файлами
    {} // карта маршрутов
    ),
    new UglifyJSPlugin()
  ]
};