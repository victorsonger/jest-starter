// https://github.yanhaixiang.com/jest-tutorial/basic/static-tool/#eslint
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 注意：要把 Prettier 的推荐配置 plugin:prettier/recommended 放在 extends 最后一项。
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
  },
};
