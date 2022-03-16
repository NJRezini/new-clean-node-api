module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      globalReturn: true
    },
    ecmaVersion: 'latest',
  },
  parser: '@typescript-eslint/parser'
}
