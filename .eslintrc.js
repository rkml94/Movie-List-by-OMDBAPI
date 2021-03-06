module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: true, parser: "flow", endOfLine: "auto" },
    ],
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
