var webpack = require('webpack')

var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
})

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: './public/bundle.js'
  },
  plugins: [definePlugin],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass'] }
    ]
  }
}