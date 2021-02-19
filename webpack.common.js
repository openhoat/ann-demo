const path = require('path')
const { ContextReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const resolveFromRoot = path.resolve.bind(null, __dirname)
const distPath = resolveFromRoot('./dist')
const resolveFromSrc = resolveFromRoot.bind(null, 'src')

module.exports = {
  entry: resolveFromSrc('index.ts'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.ts$/,
        use: 'lodash-ts-webpack-plugin',
      },
      {
        exclude: resolveFromSrc('worker.ts'),
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
            instance: 'main',
          },
        },
      },
      {
        include: resolveFromSrc('worker.ts'),
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.worker.json',
            instance: 'worker',
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: distPath,
  },
  plugins: [
    /* prevent that webpack loads momentjs-support for all languages. Only DE and EN.
     * see http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
     */
    new ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(fr|en)$/),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: resolveFromSrc('index.html'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'json',
      generateStatsFile: true,
      openAnalyzer: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.yml'],
  },
}
