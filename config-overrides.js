const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  setWebpackPublicPath,
  disableChunk
} = require('customize-cra')

// const isEnvProduction = process.env.NODE_ENV === 'production'

const addCustomize = () => (config) => {
  // 删除ManifestPlugin配置，不生成asset-manifest.json
  // 删除WorkboxWebpackPlugin配置，不使用pwa
  const withOutPlugins = ['ManifestPlugin', 'GenerateSW']
  config.plugins = config.plugins.filter(
    (plugin) => withOutPlugins.indexOf(plugin.constructor.name) === -1
  )

  // isEnvProduction &&
  //   config.plugins.push(
  //     new MiniCssExtractPlugin({
  //       filename: 'static/css/[name].css'
  //     })
  //   )

  return config
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    addWebpackAlias({
      // ../src是基于当前配置文件的位置
      '@': path.resolve(__dirname, 'src'),
      '@cps': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }),
    setWebpackPublicPath(process.env.PUBLIC_URL),
    disableChunk(),
    addCustomize()
  )
}
