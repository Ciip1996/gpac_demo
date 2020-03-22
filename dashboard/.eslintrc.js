module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
    'prettier/flowtype',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['prettier', 'react-hooks'],
  globals: {
    fetch: false,
    React: 'readonly',
    shallow: 'readonly',
    render: 'readonly',
    expect: 'readonly',
    sinon: 'readonly',
  },
};
