import path from 'path';

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv)=>{
  const watch = (env && env.WEBPACK_WATCH) ? (env.WEBPACK_WATCH === 'true') : false; // true | false
  const mode = (argv && argv.mode) ? argv.mode : 'development'; // "production" | "development" | "none"
  const filename = (mode === 'production') ? 'js/bundle.min.js' : 'js/bundle.js';
  const distDir = path.resolve('public');

  const entry = ['./src/main'];

  const plugins = [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/views/template.html',
      // filename: 'main.html', // 기본값 index.html
    })
  ];

  if(mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/style.min.css',
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
        // jsx 로더
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
        // css 로더
        {
          test: /\.s[ac]ss$/i,
          use: [ 
            styleLoader,
            "css-loader",
            "sass-loader",
          ],
          exclude: /node_modules/
        },
        // 이미지 로더
        // {
        //   test: /\.(jpe?g|png|gif)$/i,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 8192,
        //         name: 'images/[name].[hash:8].[ext]',
        //       }
        //     }
        //   ]
        // },
        // 폰트 로더
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'fonts/'
              },
            },
          ],
        },
      ]
    },
    output: {
      path: distDir,
      publicPath: '/',
      filename: filename,
    }
  }
}