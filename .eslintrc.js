module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["off", 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "array-callback-return": "warn",
    "object-curly-spacing": 0, 
    'space-before-blocks': 0,
    'no-unreachable': 0,
    "prefer-const": 0,
    "comma-dangle" : 0,
    "block-spacing": "warn",
      "brace-style": ["warn", "1tbs"],
      "camelcase": ["warn", { "properties": "never" }],
      "callback-return": ["warn", ["cb", "callback", "next"]],
      "comma-spacing": "warn",
      "comma-style": ["warn", "last"],
      "consistent-return": "warn",
      "curly": ["warn", "all"],
      "default-case": "warn",
      "dot-notation": ["warn", { "allowKeywords": false }],
      "eol-last": "warn",
      "eqeqeq": "warn",
      "guard-for-in": "warn",
      "key-spacing": 0,
      "keyword-spacing": "warn",
      "lines-around-comment": ["warn", {
          "beforeBlockComment": true,
          "afterBlockComment": false,
          "beforeLineComment": true,
          "afterLineComment": false
      }],
      "new-cap": "warn",
      "newline-after-var": ["warn", "never"],
      "new-parens": "warn",
      "no-array-constructor": "warn",
      "no-invalid-this": "warn",
      "no-multi-spaces": "warn",
      "no-redeclare": "warn",
      "no-return-assign": "warn",
      "no-spaced-func": "warn",
      "no-trailing-spaces": "warn",
      "semi": 0,
      "semi-spacing": "warn",
      "quotes": 0,
      "space-before-function-paren": ["warn", "never"],
      "space-in-parens": "warn",
      "space-infix-ops": "warn",
      "space-unary-ops": ["warn", {"words": true, "nonwords": false}],
      "spaced-comment": "warn",
      "yoda": ["warn", "never"],
      "no-mixed-requires": "warn",
      "handle-callback-err": ["warn", "err"]
  }
}
