// 集成测试
// https://github.yanhaixiang.com/jest-tutorial/basic/redux-test/#%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95
// tests/testUtils/render.tsx
import React, { FC } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer, RootState } from "@store/index";

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: RootState;
  store?: ReturnType<typeof configureStore>;
}

const render = (ui: React.ReactElement, options: CustomRenderOptions) => {
  // 获取自定义的 options，options 里带有 store 内容
  const {
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = options;

  // 使用 Provider 包裹
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  // 使用 RTL 的 render 函数
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export default render;
