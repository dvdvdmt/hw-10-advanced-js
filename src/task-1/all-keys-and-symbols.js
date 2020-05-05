export function allKeysAndSymbols(object) {
  const result = [];
  if (!object) {
    return result;
  }
  const propertyNames = Object.getOwnPropertyNames(object);
  const symbolNames = Object.getOwnPropertySymbols(object).map(String);
  result.push(
    ...propertyNames,
    ...symbolNames,
    ...allKeysAndSymbols(Object.getPrototypeOf(object))
  );
  return result;
}
