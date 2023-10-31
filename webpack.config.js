const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {

  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: "eval-source-map",
  watch: true,
  mode: "development",
  //mode: 'production',



  // The entry point file described above
  entry: {
    main: ['./src/js/index.js'],
    test: ['./src/unit-test/bootloader/index.js'],
  },


  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },


  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Quizzes: path.resolve(__dirname, "src/quizzes/"),
      Js: path.resolve(__dirname, "src/js/")
    }
  },

  module: {
    rules: [

      // CSS loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // Images loader
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          },
        ],
      },

      // HTML loader
      {
        test: /src(\/|\\)js(\/|\\)[^/]+(\/|\\)[A-Za-z]+\.html$/i,
        loader: "html-loader",
        options: { sources: false },
      },

    ],
  },

  plugins: [

    // Copy static assets, images, favicons ...
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/static/', // src location
          to: 'static',               // destination location in dist folder
        },
        {
          from: 'src/assets/static/favicon/favicon.ico',
          to: 'favicon.ico',
        },
        {
          from: 'src/assets/static/favicon/apple-touch-icon.png',
          to: 'apple-touch-icon.png',
        },
        {
          from: 'src/assets/static/favicon/apple-touch-icon.png',
          to: 'apple-touch-icon-precomposed.png',
        },

      ],
      options: { concurrency: 100, },
    }),

    // Minify HMTL and entries
    new HtmlWebpackPlugin({
      title: 'thememoryzer',
      chunks: ['main'],
      template: './src/index.html',
    }),


    // Minify CSS
    new MiniCssExtractPlugin(),
  ]

};


// Add extra plugins if development mode to create the unit tests
if (module.exports.mode === 'development') {
  module.exports.plugins = module.exports.plugins.concat([
    // Unit test for the bootloader
    new HtmlWebpackPlugin({
      title: 'thememoryzer',
      chunks: ['test'],
      filename: 'test/bootloader.html',
      template: './src/index.html',
    }),

    // Unit test for Levenshtein
    new HtmlWebpackPlugin({
      title: 'thememoryzer',
      chunks: ['test'],
      filename: 'test/levenshtein.html',
      template: './src/index.html',
    }),
  ]);
}
