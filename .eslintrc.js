module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    'react-hooks'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ["app"],
        extensions: [".ios.js", ".android.js", ".js"]
      },
      'babel-module': {
        alias: {
          '#api': './app/api',
          '#constants': './app/constants',
          '#contexts': './app/contexts',
          '#components': './app/components',
          '#hoc': './app/hoc',
          '#hooks': './app/hooks',
          '#model': './app/model',
          '#navigation': './app/navigation',
          '#redux': './app/redux',
          '#root': '.',
          '#screens': './app/screens',
          '#translations': './app/translations',
          '#utils': './app/utils',
          '#wrappers': './app/wrappers'
        },
        extensions: [".ios.js", ".android.js", ".js"]
      }
    }
  },
  env: {
    jasmine: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/prop-types': ['error', { 'ignore': ['children', 'componentId', 'close', 't', 'i18n'] }],
    'react/jsx-no-bind': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'import/prefer-default-export': 0,
    'no-unused-vars': [2, { 'argsIgnorePattern': '^_' }],
    'max-len': [2, 100],
    'global-require': 0,
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
    'object-curly-newline': [1, {
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-useless-constructor': 0,
    'newline-before-return': 'error',
    'no-return-assign': [2, 'except-parens'],
    'no-nested-ternary': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': 'off',
    'react/no-deprecated': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-newline': 'off',
    'react/no-did-update-set-state': 'off',
    'import/no-cycle': 'error',
    'react/static-property-placement': 'off',
    'operator-assignment': 'off',
    'no-underscore-dangle': 'off'
  },
  globals: {
    fetch: false,
    shallow: true,
    mount: true,
    render: true,
    withNamespaces: true,
    navigator: true,
    __DEV__: true
  }
};
