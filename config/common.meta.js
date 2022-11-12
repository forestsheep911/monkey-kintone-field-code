const pj = require('../package.json')
module.exports = {
  name: '快速查看kintone字段代码',
  namespace: `https://github.com/forestsheep911/monkin-hodgepodge/blob/main/fast-see-field-code.js`,
  version: '1.0.2',
  description: pj.description,
  author: 'bxu',
  copyright: pj.author,
  license: 'MIT',
  match: [
    'https://*.cybozu.cn/k/*/show*',
    'https://*.cybozu.com/k/*/show*',
    'https://*.cybozu-dev.com/k/*/show*',
    'https://*.kintone.com/k/*/show*',
    'https://*.s.cybozu.cn/k/*/show*',
    'https://*.s.cybozu.com/k/*/show*',
    'https://*.s.kintone.com/k/*/show*',
  ],
  require: [],
  'run-at': 'document-end',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_addStyle'],
  icon: 'https://img.icons8.com/ios/50/000000/happy-eyes.png',
}