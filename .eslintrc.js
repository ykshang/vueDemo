// .eslintrc.js 示例
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-plugin-vue"],
  rules: {
    "vue/no-multiple-template-root": "off",
  },
};
