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
    // Jest
    "plugin:jest/recommended",
    // React Testing Library
    "plugin:testing-library/react",
    // 注意：要把 Prettier 的推荐配置 plugin:prettier/recommended 放在 extends 最后一项。
    "plugin:prettier/recommended",
  ],
  rules: {
    // 关闭规则
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-var": "off",
    "@typescript-eslint/no-var-requires": "off",
    "testing-library/no-dom-import": "off",

    // 错误提示
    // 禁止在测试中使用集中测试的方法，比如 test.only 或 describe.only。这些方法会导致只运行特定的测试或测试组，而忽略其他测试，这在开发过程中可能有用，但在提交代码时通常应该避免，以确保所有测试都被运行
    "jest/no-focused-tests": "error",
    // 禁止在同一个测试文件中使用相同的测试标题
    "jest/no-identical-title": "error",
    // 确保 expect 语句的使用是有效的。在 Jest 测试中，expect 是用于断言的函数，必须与匹配器一起使用，如 expect(value).toBe(expectedValue)。这个规则会检查 expect 是否被正确使用，以避免无效的断言
    "jest/valid-expect": "error",
    // 这个规则要求对返回 Promise 的异步查询方法使用 await。在使用 Testing Library 时，某些查询方法是异步的，必须使用 await 来正确处理这些 Promises，确保测试在查询完成后继续
    "testing-library/await-async-query": "error",
    // 这个规则禁止对同步查询方法使用 await。如果一个查询方法是同步的，使用 await 是不必要的，并且可能导致混淆或错误的测试逻辑。这个规则帮助开发者正确区分同步和异步查询
    "testing-library/no-await-sync-query": "error",

    // 告警提示
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
    "testing-library/no-debugging-utils": "warn",
  },
};
