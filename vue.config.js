module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve
    .extensions
    .merge(['.md'])

    config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('markdown-raw')
    .loader('raw-loader')
  }
}
