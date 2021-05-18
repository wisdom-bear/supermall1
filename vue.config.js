//配置路径别名
module.exports = {
  configureWebpack: {
    resolve: {
      // extension:[]  配置路径后缀名
      alias: {
        // '@' :'src' 内部已经配置好了这个别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}