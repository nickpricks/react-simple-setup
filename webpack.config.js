module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-runtime',
          ],
        },
      },
    ],
  },
};
