export class TaskModel {
  #id;
  #name;
  #description;
  #deliveryDate;
  #createdAt;
  #updatedAt;
  #logs;

  constructor(object) {
    this.#id = object.id;
    this.#name = object.nameTask;
    this.#description=object.descriptionTask; 
    this.#deliveryDate=object.deliveryTask;
    this.#createdAt = object.createdAtTask;
    this.#updatedAt = object.updatedAtTask;
    this.#logs = object.taskLogs;
  }

  get Id() {
    return this.#id;
  }

  get Logs(){
    return this.#logs;
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
  
}
