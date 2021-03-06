import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv) => {
  const watch = (env && env.WEBPACK_WATCH) ? (env.WEBPACK_WATCH === 'true') : false; // true | false
  const mode = (argv && argv.mode) ? argv.mode : 'development'; // "production" | "development" | "none"
  const isDev = (mode === 'development');
  const isProd = (mode === 'production');

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
      port: 8000,
      // static: false,
      historyApiFallback: true,
      static: { 
        directory: path.resolve('public'), 
        publicPath: '/'
      }
    },
    entry: ['./src/App'],
    resolve: {
    	extensions: [ '.js', '.jsx'],
      modules: [path.resolve('node_modules'), 'node_modules'],
    },
    devtool: isDev ? 'inline-source-map':'cheap-module-source-map',
    plugins: [
      isProd && new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!static-files*',
          '!images/**',
        ],
      }),
      isProd && new MiniCssExtractPlugin({
        filename: 'styles/bundle.min.css',
      }),
      isDev && new HtmlWebpackPlugin({
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        // filename: 'index.html',
        // template: './src/views/template.html',
        template: './src/views/template.ejs',
        templateParameters: {
          isProd: false,
          isDesktop: true,
        },
      }),
    ].filter(Boolean),
    module: {
      rules: [
        // jsx 로더
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ],
            plugins: [],
          },
          exclude: /node_modules/
        },
        // css 로더
        {
          test: /\.s[ac]ss$/i,
          use: [ 
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
        '@app': path.resolve('src/App'),
        '@config': path.resolve('configs/Config.jsx'),
        '@views': path.resolve('src/views'),
        '@components': path.resolve('src/views/components'),
        '@containers': path.resolve('src/views/containers'),
        '@pages': path.resolve('src/views/pages'),
        '@utils': path.resolve('src/utils'),
        '@styles': path.resolve('src/styles'),
      }
    },
    output: {
      path: path.resolve('public'),
      publicPath: '/',
      filename: isProd ? 'scripts/bundle.min.js' : 'scripts/bundle.js',
    }
  }
}