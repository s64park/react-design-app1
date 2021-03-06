var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

   plugins: [
       new webpack.DefinePlugin({
         'process.env': {
           'NODE_ENV': JSON.stringify('production')
          }
        }),
       new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
       })
   ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
  }
};
