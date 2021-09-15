
const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry:'./main.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "windows.jQuery":"jquery"
    })
  ]
}
