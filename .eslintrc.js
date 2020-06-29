module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    indent: 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/indent': ['error', 2]
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ]
}
