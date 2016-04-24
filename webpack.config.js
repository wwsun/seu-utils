var path = require('path');
var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'lib');

module.exports = {
  entry: path.resolve(dir_js, 'index.js'),
  
  output: {
    path: dir_build,
    filename: 'seu-util.js'
  },
  
  module: {
    loaders: [
      {test: dir_js, loader: 'babel-loader'}
    ]
  },
  
  devtool: 'source-map'
};