
# Jest 入门项目

[![Coverage Status](https://coveralls.io/repos/github/victorsonger/jest-starter/badge.svg?branch=main&timestamp=1724747549)](https://coveralls.io/github/victorsonger/jest-starter?branch=main)

这是一个参考 [Jest 实践指南](https://github.yanhaixiang.com/jest-tutorial/) 的 Jest 学习项目。通过遵循指南中的示例和方法，本项目旨在练习并掌握 Jest 测试技巧。

## 项目概述

此仓库是一个用于练习 Jest（一个令人愉悦的 JavaScript 测试框架）的环境。项目中包含了各种测试用例和配置，帮助你理解如何在 JavaScript/TypeScript 环境中编写和运行测试。

## 快速开始

### 前置条件

在开始之前，请确保你已经安装了以下工具：

- Node.js（版本 14 或更高）
- npm（随 Node.js 一起安装）或 yarn

### 安装步骤

1. 克隆此仓库：

   ```bash
   git clone https://github.com/victorsonger/jest-starter.git
   ```

2. 进入项目目录：

   ```bash
   cd jest-starter
   ```

3. 安装依赖项：

   ```bash
   npm install
   ```

   或者，如果你使用 yarn：

   ```bash
   yarn install
   ```

### 运行测试

要运行测试套件，可以使用以下命令：

```bash
npm run test
```

或使用 yarn：

```bash
yarn test
```

此命令将会执行 `tests` 目录中的所有测试文件，并在终端中显示结果。

## 项目结构

```plaintext
├── coverage/           # 测试覆盖率报告
├── node_modules/       # 项目依赖
├── src/                # 源代码
├── tests/              # 测试文件
│   ├── jest-setup.ts   # Jest 设置和配置
│   ├── jest.config.js  # Jest 配置文件
├── package.json        # 项目信息和脚本
├── tsconfig.json       # TypeScript 配置
└── .gitignore          # Git 忽略文件
```

## 贡献

欢迎贡献！如果你有任何建议或改进，请随时创建 Issue 或提交 Pull Request。

## 许可证

本项目采用 MIT 许可证。

## 致谢

- 感谢 [Jest 实践指南](https://github.yanhaixiang.com/jest-tutorial/) 为本项目提供了灵感和指导。
- [测试库汇总](https://testing-library.com/docs/react-testing-library/intro/)