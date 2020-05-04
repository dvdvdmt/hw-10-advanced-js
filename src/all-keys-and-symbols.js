export function allKeysAndSymbols(object) {
  const res = [];
  if (!object) {
    return res;
  }
  const propertyNames = Object.getOwnPropertyNames(object);
  const symbolNames = Object.getOwnPropertySymbols(object).map(String);
  res.push(
    ...propertyNames,
    ...symbolNames,
    ...allKeysAndSymbols(Object.getPrototypeOf(object))
  );
  return res;
}
