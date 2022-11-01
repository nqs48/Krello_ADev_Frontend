export class Container {
  #container;

  constructor() {
    this.#GenerateContainer();
  }

  get() {
    return this.#container;
  }

  #GenerateContainer() {
    const container = document.createElement("section");
      container.setAttribute("id", "container_boards");
      container.classList.add("container", "content_container");
    this.#container = container;
  }
}

