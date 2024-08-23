// tests/store/user/reducer.test.ts
import reducer, { updateUserName } from "@/store/user/reducer";

describe("reducer", () => {
  describe("测试reducer", () => {
    describe("测试action： updateUserName", () => {
      it("可以更新用户名", () => {
        const currentState = reducer(
          {
            id: "",
            name: "",
            age: 0,
            status: "",
          },
          updateUserName({
            name: "hello",
          })
        );

        expect(currentState.name).toEqual("hello");
      });
    });
  });
});

