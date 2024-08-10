const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/main.ts', // Entry point for your application
  output: {
    filename: 'main.bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude node_modules from transpilation
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the dist folder before each build
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/, // Ignore moment.js locale files, for example
      contextRegExp: /moment$/,
    }),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Remove comments,
          },
        },
        extractComments: false,
      }),
    ],
  },
  externals: [
    function ({ request }, callback) {
      // Exclude all dependencies in package.json (prod, dev, peer)
      if (/^[a-z\-0-9]+$/.test(request)) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    },
  ],
  devtool: 'source-map', // Generate source map
};
