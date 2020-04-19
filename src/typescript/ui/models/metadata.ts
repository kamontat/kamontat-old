type MetaType = JSX.IntrinsicElements["meta"];

type Value = string | undefined | null;
type Json<T = string> = { [key: string]: T };

export default class {
  private list: Array<MetaType>;

  constructor() {
    this.list = [];
  }

  addNameContent(key: string, values: Value[], options: Json = {}) {
    const value = values.reduce((p, c) => (p ? p : c), undefined);

    this.add(value, (d) => ({
      name: key,
      content: d,
      ...options,
    }));
  }

  addPropertyContent(key: string, values: Value[], options: Json = {}) {
    const value = values.reduce((p, c) => (p ? p : c), undefined);

    this.add(value, (d) => ({
      property: key,
      content: d,
      ...options,
    }));
  }

  add(d: Value, fn: (d: string) => MetaType) {
    if (d || d === "false") this.list.push(fn(d));
    else this.list.push(fn("null")); // default data is null
  }

  show() {
    return this.list;
  }
}
