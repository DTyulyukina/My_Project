const path                 = require('path');
var   webpack              = require('webpack');
var   UglifyJSPlugin       = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin    = require("extract-text-webpack-plugin");
var   MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'app' :      './src/main.ts'
  },
  performance: {
    hints: false
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
  },
   resolve: {
    extensions: ['.ts', '.js', '.json', '.html', '.scss', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=dist/assets/images/[name].[hash].[ext]'
      },{
        test: /\.html$/,
        loader: 'html-loader'
      },   
      {
        test: /\.ts$/, // определяем тип файлов
        use: [
        {
             loader: 'awesome-typescript-loader',
             options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
           } ,'angular2-template-loader'
        ]
      }
    ]
  },
  plugins: [
  new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  new webpack.ContextReplacementPlugin(
      /angular(\|\/)core/,
      path.resolve(__dirname, 'src'), // каталог с исходными файлами
    {} // карта маршрутов
  ),
  new UglifyJSPlugin()
  ]
};