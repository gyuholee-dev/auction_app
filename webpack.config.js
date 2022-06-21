import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv)=>{
  const watch = (env && env.WEBPACK_WATCH) ? (env.WEBPACK_WATCH === 'true') : false; // true | false
  const mode = (argv && argv.mode) ? argv.mode : 'development'; // "production" | "development" | "none"
  const filename = (mode === 'production') ? 'public/js/bundle.min.js' : 'public/js/bundle.js';
  const distDir = path.resolve('public');

  const entry = ['./src/main'];

  const plugins = [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      // template: './src/tpl/template.html',
      // filename: 'main.html', // 기본값 index.html
    })
  ];

  if(mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'public/css/style.min.css'
    }));
  }
  const styleLoader = (mode === 'production') ? MiniCssExtractPlugin.loader : 'style-loader';

  return {
    mode: mode,
    watch: watch,
    watchOptions: {
      ignored: /node_modules/,
    },
    devServer: {
      static: false,
      watchFiles: ["./src/*", "./src/**/*"],
      open: true,
      hot: true,
      compress: true,
      port: 9000,
    },
    entry: entry,
    resolve: {
    	extensions: [ '.js', '.jsx'],
      modules: [path.resolve('node_modules'), 'node_modules'],
    },
    devtool: 'source-map',
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
             '@babel/preset-env', 
             '@babel/preset-react'
            ],
            plugins: [], 
          },
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [ 
            styleLoader,
            "css-loader",
            "sass-loader",
          ],
          exclude: /node_modules/
        }
      ]
    },
    output: {
      path: distDir,
      publicPath: '/',
      filename: filename,
    }
  }
}