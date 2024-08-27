import { config } from "@/utils/env";

describe("noMock env config", () => {
  it("可以获取当前的env", () => {
    const env = config.getEnv();
    expect(env).toEqual("test");
  });
});
