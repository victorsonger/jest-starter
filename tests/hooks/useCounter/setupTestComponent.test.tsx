import useCounter from "@/hooks/useCounter";
import { act, render } from "@testing-library/react";
import React from "react";

const setup = (initialNumber: number) => {
  const returnValue = ({} as unknown) as {
    counter: ReturnType<typeof useCounter>[0];
    utils: ReturnType<typeof useCounter>[1];
  };

  const UseCounterTest = () => {
    const [counter, utils] = useCounter(initialNumber);
    Object.assign(returnValue, {
      counter,
      utils,
    });
    return null;
  };

  render(<UseCounterTest />);

  return returnValue;
};

describe("useCounter", () => {
  it("可以做加法", () => {
    const useCounterData = setup(0);
    // act 可以确保回调里的异步逻辑走完再执行后续代码
    act(() => {
      useCounterData.utils.inc(1);
    });

    // 进行断言
    expect(useCounterData.counter).toEqual(1);
  });

  it("可以做减法", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.dec(1);
    });

    expect(useCounterData.counter).toEqual(-1);
  });

  it("可以设置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.set(10);
    });

    expect(useCounterData.counter).toEqual(10);
  });

  it("可以重置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.inc(1);
      useCounterData.utils.reset();
    });

    expect(useCounterData.counter).toEqual(0);
  });
});
