var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack')
var glob = require('glob')


var APP_DIR = path.resolve(__dirname, 'app')
var BUILD_DIR = path.resolve(__dirname, 'public')
var STYLE_DIR = path.resolve(__dirname, 'app/styles')

var deps = ["react", "react-dom", "redux"]

var PRODUCTION = true

var entrypoints = []
var sourcemaps = ''
var devtool = ''
var hotReload = PRODUCTION
  
  if (!PRODUCTION){
    entrypoints.push('webpack-dev-server/client?http://localhost:8080')
    entrypoints.push('webpack/hot/only-dev-server')
    sourcemaps = '?sourceMap'
    devtool = 'source-map'
  }


module.exports = {
  
  //Development
  entry: {
    app:entrypoints.concat(
      [APP_DIR + '/styles/styles.scss',
       APP_DIR + '/index.js']
    ),
    vendor: deps
  },

  output: {
    path: BUILD_DIR ,
    filename: 'js/bundle.js',
    publicPath: '/public/',

  },


  devtool: devtool,



  devServer: {
    hot: !PRODUCTION,
},

  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
        // loaders: ['babel'], // Production
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url-loader?limit=200000!postcss-loader!sass-loader' + sourcemaps)
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|otf|gif)$/, 
        loader: 'url-loader?limit=200000'
      }
    ]
  },

  plugins: [
      // Set production ENV
      new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(PRODUCTION?'production':'development')}}),

      
      // Minify JS
      new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.min.js'),
      
      // Minify CSS
      new ExtractTextPlugin('css/bundle.css', {allChunks: true}),

      //Purify css
      new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, '*.html'))
      }),

      //Hot reload
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
}