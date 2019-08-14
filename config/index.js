const path = require('path')

const config = {
  projectName: 'taro-minapp-tpl',
  date: '2019-01-01',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env',
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  alias: {
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@config': path.resolve(__dirname, '..', 'src/config'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@models': path.resolve(__dirname, '..', 'src/models'),
    '@pages': path.resolve(__dirname, '..', 'src/pages'),
    '@assets': path.resolve(__dirname, '..', 'src/assets')
  },
  weapp:{
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
