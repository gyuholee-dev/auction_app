import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv) => {
  const watch = (env && env.WEBPACK_WATCH) ? (env.WEBPACK_WATCH === 'true') : false; // true | false
  const mode = (argv && argv.mode) ? argv.mode : 'development'; // "production" | "development" | "none"
  const filename = (mode === 'production') ? 'scripts/bundle.min.js' : 'scripts/bundle.js';
  const distDir = path.resolve('public');

  const entry = ['./src/App'];

  const babelPlugins = [];
  const plugins = [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!static-files*',
        '!images/**',
      ],
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
      filename: 'styles/style.min.css',
    }));
  }
  const styleLoader = (mode === 'production') ? MiniCssExtractPlugin.loader : 'style-loader';

  return {
    mode: mode,
    watch: watch,
    watchOptions: {
      ignored: /node_modules/,
    },
    // cache: false,
    devServer: {
      watchFiles: ["./src/*", "./src/**/*"],
      open: true,
      hot: true,
      liveReload: true,
      compress: true,
      port: 9000,
      // static: false,
      historyApiFallback: true,
      static: { 
        directory: distDir, 
        publicPath: '/'
      }
    },
    entry: entry,
    resolve: {
    	extensions: [ '.js', '.jsx'],
      modules: [path.resolve('node_modules'), 'node_modules'],
    },
    devtool: (mode === 'development') ? 'inline-source-map':'cheap-module-source-map',
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
            plugins: babelPlugins,
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
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: './fonts/[name].[hash:8].[ext]',
          },
        },
      ]
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve('/src'),
      }
    },
    output: {
      path: distDir,
      publicPath: '/',
      filename: filename,
    }
  }
}