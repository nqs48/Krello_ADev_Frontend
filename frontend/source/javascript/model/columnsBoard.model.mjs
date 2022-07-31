
export class ColumnsForBoard {
  #id;
  #name;
  #createdAt;
  #updatedAt;

  constructor(object) {
    this.#id = object.id;
    this.#name = object.name;
    this.#createdAt = object.createdAt;
    this.#updatedAt = object.updatedAt;
  }

  get Id() {
    return this.#id;
  }
  get Name() {
    return this.#name;
  }

  get CreatedAt() {
    return this.#createdAt;
  }

  get UpdatedAt() {
    return this.#updatedAt;
  }
}