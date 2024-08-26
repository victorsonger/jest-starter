// 这个测试的重点在于，要创造一个React Router环境
// https://github.yanhaixiang.com/jest-tutorial/basic/hook-test/#usequery
// tests/hooks/useQuery.test.tsx
import React from "react";
import useQuery from "@hooks/useQuery";
import { createMemoryHistory, InitialEntry } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

const setup = (initialEntries: InitialEntry[]) => {
  const history = createMemoryHistory({ initialEntries });

  const returnValue = {
    query: new URLSearchParams(),
  };

  const TestComponent = () => {
    const query = useQuery();
    Object.assign(returnValue, {
      query,
    });

    return null;
  };

  // 此处为 react router v6 的写法
  render(
    <Router location={history.location} navigator={history}>
      <TestComponent />
    </Router>
  );
  // 此处为 react router v5 的写法
  // render(
  //   <Router history={history}>
  //     <TestComponent />
  //   </Router>
  // );

  return returnValue;
};

describe("userQuery", () => {
  it("可以获取参数", () => {
    const result = setup([
      {
        pathname: "/home",
        search: "?id=123",
      },
    ]);

    expect(result.query.get("id")).toEqual("123");
  });

  it("查询参数为空时返回 Null", () => {
    const result = setup([
      {
        pathname: "/home",
      },
    ]);

    expect(result.query.get("id")).toBeNull();
  });
});
