module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    jest: true,
    commonjs: true,
    es2021: true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'modules-newlines',
    'no-null',
  ],
  extends: [
    'plugin:node/recommended',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['.eslintrc.js', './node_modules', '**/*.json', '**/*.md', ''],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/no-unresolved': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreDeclarationSort': true,
    }],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
      'alphabetize': { 'order': 'asc' },
    }],
    'modules-newlines/import-declaration-newline': 'warn',
    'modules-newlines/export-declaration-newline': 'warn',
    'object-curly-newline': ['error', {
      'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
    }],
    'no-unused-expressions': 'off',
    'no-console': 'error',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'error',
    'newline-before-return': 'error',
    'strict': 'off',
    'node/no-unsupported-features/es-syntax': ['error', {
      'ignores': ['modules'],
    }],
    'node/no-missing-import': ['error', {
      'tryExtensions': ['.js', '.json', '.node', '.ts'],
    }],
    'max-len': [
      'error',
      { 'code': 180, 'comments': 180 },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'node/no-unpublished-import': 'off',
    'no-return-await': 'warn',
    'no-null/no-null': 'warn',
    'no-trailing-spaces': ['warn', { 'ignoreComments': true }],
  },
  overrides: [
    {
      'files': ['**/*.dto.ts'],
      'rules': {
        '--no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
      },
    },
    {
      'files': ['**/test/**/*.spec.ts'],
      'rules': {
        'func-names': 'off',
      },
    },
  ]
};
