
export class ColumnsForBoard {
  #id;
  #name;
  #createdAt;
  #updatedAt;
  #tasks;

  constructor(object) {
    this.#id = object.id;
    this.#name = object.name;
    this.#createdAt = object.createdAt;
    this.#updatedAt = object.updatedAt;
    this.#tasks = object.tasks;
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

  get Tasks() {
    return this.#tasks;
  }
}