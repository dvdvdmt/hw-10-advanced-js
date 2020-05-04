import {allKeysAndSymbols} from "./all-keys-and-symbols.js";

describe(`allKeysAndSymbols`, () => {
  it(`returns empty array on falsy input`, () => {
    expect(allKeysAndSymbols(null)).toHaveLength(0);
  });

  it(`returns empty array on object with empty prototype`, () => {
    expect(allKeysAndSymbols(Object.create(null))).toHaveLength(0);
  });
});
