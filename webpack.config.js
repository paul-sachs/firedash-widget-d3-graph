module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './lib',
    library: 'infl-icons',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react-loader'
      }
    ]
  }
};
