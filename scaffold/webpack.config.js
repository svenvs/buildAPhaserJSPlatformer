const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      Characters: path.resolve(__dirname, 'src/characters/'),
      Fx: path.resolve(__dirname, 'src/fx/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|ogg|wav)$/i,
        use: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ 
    title: "killerPlatformer",
    template: 'src/index.html'
  }
  )]
};