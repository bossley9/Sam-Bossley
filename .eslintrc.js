module.exports = {
  'env': {
      'browser': true,
      'es6': true
  },
  'extends': 'eslint:recommended',
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      },
      'ecmaVersion': 2018,
      'sourceType': 'module'
  },
  'plugins': [
      'react'
  ],
  'rules': {
      "indent": [
          'error',
          2,
          {'SwitchCase': 1},
      ],
      'quotes': [
          'error',
          'single'
      ],
      'no-undef': 0,
      'no-unused-vars': [0],
  }
}