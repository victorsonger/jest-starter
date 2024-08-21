// https://lucp.lkcoffee.com/testLaunchDetail/TestLaunch-14364
// tests/utils/env/doMock.test.ts
describe("doMock config", () => {
  beforeEach(() => {
    // 必须重置模块，否则无法再次应用 doMock 的内容
    jest.resetModules();
  })

  it('开发环境', () => {
    jest.doMock('@utils/env', () => ({
      __esModule: true,
      config: {
        getEnv: () => 'dev'
      }
    }));

    const { config } = require('@utils/env');

    expect(config.getEnv()).toEqual('dev');
  })

  it('正式环境', () => {
    jest.doMock('@utils/env', () => ({
      __esModule: true,
      config: {
        getEnv: () => 'prod'
      }
    }));

    const { config } = require('@utils/env');

    expect(config.getEnv()).toEqual('prod');
  })
});
