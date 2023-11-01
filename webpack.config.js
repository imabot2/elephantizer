const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { translations } = require("./translations.js");
const { unitTests } = require("./unit-test.js");



module.exports = (env) => {
  // Display compilation mode
  console.log('mode = ', env.mode);

  // Prepare the config variable
  config = {
    
    // Set compilation mode
    mode: env.mode ?? 'production',
    
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: "eval-source-map",
    
    // Watch in development mode only
    watch: (env.mode == 'production') ? false : true,
    



    // Default entry point is main
    entry: {
      main: ['./src/js/main.js'],
      error404: ['./src/js/error404.js'],
    },


    // The location of the build folder
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

      new HtmlWebpackPlugin({
        title: 'Error 404',
        chunks: ['error404'],
        template: './src/error404.ejs',
        filename: `404.html`,
      }),

      ...translations.map((page) => {

        return new HtmlWebpackPlugin({
          title: 'thememoryzer',
          chunks: ['main'],
          template: './src/index.ejs',
          filename: `${page.path}index.html`,
          templateParameters: page.templateParameters,
        });

      }),


      // Minify CSS
      new MiniCssExtractPlugin(),
    ]
  }


  // Append unit test if development mode
  if (env.mode === 'development') {

    // Add unit test entries
    unitTests.forEach((test) => {
      config.entry[test.name] = [`./src/unit-test/${test.name}/index.js`];
    })

    // Add unit test html pages
    config.plugins = config.plugins.concat(
      ...unitTests.map((test) => {

        return new HtmlWebpackPlugin({
          title: 'thememoryzer',
          chunks: [test.name],
          filename: `unit-test/${test.name}/index.html`,
          template: './src/index.ejs',
          templateParameters: translations[0].templateParameters,
        });

      }),

    )
  }



  //console.log(config.entry);
  return config;
};