// eslint.config.js
module.exports = {
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      extends: ['eslint:recommended'],
      rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
      },
    },
  ],
};
