// mock部分依赖 https://github.yanhaixiang.com/jest-tutorial/basic/how-to-mock/#%E4%B8%80%E6%AC%A1%E6%80%A7-mock

// jest.mock 会被提升到所有 import 前
jest.mock('@utils/foo-bar-baz', () => {
  // 真实的 foo-bar-baz 模块内容
  const originalModule = jest.requireActual('@utils/foo-bar-baz');

  // Mock 默认导出和 foo 的内容
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

import defaultExport, {bar, foo} from '@utils/foo-bar-baz';

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});