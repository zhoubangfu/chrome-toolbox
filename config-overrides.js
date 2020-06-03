const path = require('path')
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  setWebpackPublicPath,
  disableChunk
} = require('customize-cra')

const addCustomize = () => (config) => {
  // 删除ManifestPlugin配置，不生成asset-manifest.json
  config.plugins.splice(6, 1)
  // 删除WorkboxWebpackPlugin配置，不使用pwa
  config.plugins.splice(7, 1)

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
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }),
    setWebpackPublicPath(process.env.PUBLIC_URL),
    disableChunk(),
    addCustomize()
  )
}
