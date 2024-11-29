import { defineConfig } from 'eslint';

export default defineConfig({
  languageOptions: {
    globals: {
      // Define global variables here (e.g., node: true)
    },
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Add any specific rules you want to enforce here
  },
});
