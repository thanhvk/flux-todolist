module.exports = {
  entry: [
    './app/App.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: "jsx-loader"}
    ]
  },
  output: {
    filename: "public/bundle.js"
  }
};
