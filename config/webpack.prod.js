const webpack = require('webpack')
const devBanner = require('./dev.meta.js')
const { baseOptions, getBanner } = require('./webpack.config.base')

module.exports = () => {
  baseOptions.output.filename = `${devBanner.name}.user.js`
  baseOptions.plugins.push(
    new webpack.BannerPlugin({
      banner: getBanner({}),
      raw: true,
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: true,
    }),
  )
  baseOptions.mode = 'production'

  return baseOptions
}
