export class TaskModel {
  #id;
  #name;
  #description;
  #deliveryDate;
  #createdAt;
  #updatedAt;
  #idColumn;
  #idBoard;

  constructor(object) {
    this.#id = object.id;
    this.#name = object.name;
    this.#description=object.description; 
    this.#deliveryDate=object.deliveryDate;
    this.#createdAt = object.createdAt;
    this.#updatedAt = object.updatedAt;
    this.#idColumn=object.idColumn;
    this.#idBoard=object.idBoard;
  }

  get Id() {
    return this.#id;
  }

  get Name() {
    return this.#name;
  }

  get Description() {
    return this.#description;
  }

  get DeliveryDate() {
    return this.#deliveryDate;
  }

  get CreatedAt() {
    return this.#createdAt;
  }

  get UpdatedAt() {
    return this.#updatedAt;
  }
  
  get IDColumn() {
    return this.#idColumn;
  }

  get IDBoard() {
    return this.#idBoard;
  }
}
