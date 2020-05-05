export class MySet {
  setValues = [];

  get size() {
    return this.setValues.length;
  }

  constructor(values) {
    if (values?.length) {
      values.forEach((value) => this.add(value));
    }
  }

  values() {
    return this.setValues;
  }

  keys() {
    return this.setValues;
  }

  entries() {
    return this.setValues.map((value) => [value, value]);
  }

  add(value) {
    const isIdenticalToValue = Object.is.bind(null, value);
    const isValueInSet = this.setValues.some(isIdenticalToValue);
    if (!isValueInSet) {
      this.setValues.push(value);
    }
  }

  clear() {
    this.setValues = [];
  }

  delete(value) {
    const isIdenticalToValue = Object.is.bind(null, value);
    this.setValues = this.setValues.filter((v) => !isIdenticalToValue(v));
  }

  has(value) {
    const isIdenticalToValue = Object.is.bind(null, value);
    return this.setValues.some(isIdenticalToValue);
  }

  valueOf() {
    return this;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.setValues.length) {
          return {
            value: this.setValues[index++],
            done: false,
          };
        } else {
          return {done: true};
        }
      },
    };
  }

  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
}
