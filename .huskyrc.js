const task = arr => arr.join('&&')

module.exports = {
  'hooks': {
    'pre-commit': task([
      'npm run standard'
    ])
  }
}