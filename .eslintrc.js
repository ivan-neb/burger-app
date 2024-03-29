module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [0],
    'react/jsx-one-expression-per-line': [0],
    'guard-for-in': [0],
    'jsx-a11y/label-has-for': [0],
    'no-restricted-syntax': [0],
  },
};
