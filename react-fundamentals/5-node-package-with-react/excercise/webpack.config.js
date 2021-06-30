const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/app.jsx',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module:{
    rules:[{
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
          // loader: 'esbuild-loader',
          // options: {
          //   loader: 'jsx',  // Remove this if you're not using JSX
          //   target: 'es2015'  // Syntax to compile to (see options below for possible values)
          // }
        }
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
};