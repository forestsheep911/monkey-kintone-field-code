const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`,
  version: '0.0.1',
  description: 'awesome',
  author: `${pj.author}`,
  copyright: `${pj.author}`,
  license: 'MIT',
  match: ['https://*'],
  'run-at': 'document-start',
  supportURL: 'https://yourURL',
  homepage: `${pj.homepage}`,
  grant: [],
  icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-wiki-productivity-flaticons-lineal-color-flat-icons-5.png',
}
