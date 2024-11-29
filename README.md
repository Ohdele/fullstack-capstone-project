# coding-project-template

name: 'CI/CD'

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  lint_js:
      name: Lint JavaScript Files
      runs-on: ubuntu-latest

      steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14

      - name: Install JSHint
        run: npm install jshint --global

      - name: Run Linter
        run: |
          # This command finds all JavaScript files recursively and runs JSHint on them
          find ./giftlink-backend -name app.js -exec jshint {} +
          find ./giftlink-backend -name auth.js -exec jshint {} +
          find ./giftlink-backend -name giftRoutes.js -exec jshint {} +
          find ./giftlink-backend -name searchRoutes.js -exec jshint {} +
          echo "Linted all the js files successfully"

  client_build:
      name: Build client
      runs-on: ubuntu-latest

      steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14

      - name: Run build
        run: |
          cd giftlink-frontend
          npm install
          npm run build
          echo "Client-side build successfully"