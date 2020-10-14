module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    "no-console": "warn",
    "semi": ['error', 'never'],
    "no-unexpected-multiline": "error",
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-empty": "warn",
    "react/jsx-filename-extension": "off",
    "object-curly-spacing": ['error', 'always'],
    "react/prop-types": "off",
    "camelcase": "off",
    "@typescript-eslint/camelcase": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "quotes": [2, "single", "avoid-escape"]
  },
};

