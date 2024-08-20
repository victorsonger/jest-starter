// tests/utils/sleep.ts
// https://github.yanhaixiang.com/jest-tutorial/basic/mock-timer/#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95
import sleep from "utils/sleep";

describe("sleep", () => {
  it("可以在1s后执行", async () => {
    // 假设不用这个fakertimer，下面设置5秒的定时器就会真的让我们的测试用例等待5s才执行完
    // 而5s会被jest认为测试超时，直接就报错了
    jest.useFakeTimers();

    const mockFn = jest.fn();

    const promise = sleep(5000).then(mockFn);

    expect(mockFn).not.toBeCalled();

    jest.runAllTimers();
    await promise;

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
