module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect'
    }
},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'no-console': 'warn',
    'import/first': 'error',
    'react/prop-types': 0,
    'linebreak-style': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
};
