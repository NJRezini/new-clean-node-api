module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'no-restricted-syntax': 0,
    'max-classes-per-file': 0,
  },
};
