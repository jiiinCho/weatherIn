module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true, // ECMAScript 2015
  },
  settings: {
    react: {
      version: 'detect',
    },
    polyfills: ['Promise', 'URL'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'jest', '@typescript-eslint', 'react-hooks', 'prettier'],
  overrides: [
    {
      files: ['**/*.test.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['**/*.macro.test.js'],
      rules: {
        'jest/no-standalone-expect': 'off',
      },
    },
    {
      files: ['./test/*/**'],
      rules: {
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['*.tsx, *.jsx'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              '{}': false,
            },
          },
        ],
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-use-before-define': 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'all'],
    'no-alert': 1,
    // TODO: remove `log` before publish
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'log'] }],
    'func-names': 'error',
    'no-constant-condition': 'error',
    'no-underscore-dangle': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-destructuring': 'off',
    '@typescript-eslint/dot-notation': 'off',
    // TODO: disallow object['property']
    'dot-notation': 'error',
    '@typescript-eslint/no-throw-literal': 'off',
    'no-throw-literal': 'error',
    // TODO: doesn't work?
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: true,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'error',
    'react/sort-prop-types': 'error',
    // TODO: We re-export default in many places, remove when https://github.com/airbnb/javascript/issues/2500 gets resolved
    'no-restricted-exports': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'no-unused-expressions': 'error',
    'react/no-array-index-key': 'warn',
    'no-use-before-define': 'error',
    'spaced-comment': ['error', 'always'],
    // TODO: update list
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '*.config.js', '**/*.md'],
      },
    ],
    'react/no-unstable-nested-components': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': 'off',
    // Missing yarn workspace support
    'import/no-extraneous-dependencies': 'off',
    'jest/expect-expect': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'error',
    'import/order': 'error',
    'no-param-reassign': 'off', // because tag.__emotion_styles
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/static-property-placement': 'off',
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        functions: 'defaultArguments',
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
