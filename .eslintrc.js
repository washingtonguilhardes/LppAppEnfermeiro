module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb/hooks',
  ],

  plugins: [
    'import-helpers'
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^@src\/Pages/',
          '/^@src\/Routes/',
          '/^@src\/Services/',
          '/^@src\/Store/',
          '/^@src\/Utils/',
          '/^@src\/Assets/',
          '/^@src\/Theme/',
          '/^@src\/Components/',
          '/^@src\/Types/',
          '/^@src\/Constants/',
          '/^@src\/Exceptions/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": 0
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"]
    },
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "@src": "./src"
        },
        "extensions": [".js", ".jsx", ".tsx", ".ts", ".d.ts"],

      }
    }
  }

};
