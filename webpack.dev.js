const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path')

const resolveFromRoot = path.resolve.bind(null, __dirname)
const distPath = resolveFromRoot('./dist')

module.exports = merge(common, {
  devServer: {
    contentBase: distPath,
  },
  devtool: 'source-map',
  mode: 'development',
})
