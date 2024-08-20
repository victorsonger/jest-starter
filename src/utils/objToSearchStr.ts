// 在jest的过程中
// 还可以打断点
// 避免多个console
const objToSearchStr = (obj: Record<string, string | number>) => {
  // ['a=1', 'b=2']
  const strPairs: string[] = [];

  Object.entries(obj).forEach((keyValue) => {
    const [key, value] = keyValue; // [a, 1]
    const pair = key + "=" + String(value); // a=1
    strPairs.push(pair);
  }, []);

  // a=1&b=2
  return strPairs.join("&");
};

export default objToSearchStr;