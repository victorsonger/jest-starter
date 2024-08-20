// 试一下测试驱动开发 TDD
// https://github.yanhaixiang.com/jest-tutorial/basic/tdd/#%E5%AE%9E%E6%88%98
import objToSearchStr from "@/utils/objToSearchStr";

describe("objToSearchStr", () => {
  it("可以将对象转化成查询参数字符串", () => {
    expect(
      objToSearchStr({
        a: "1",
        b: "2",
      })
    ).toEqual("a=1&b=2");
  });
});