import {TaskComponent} from "./task.component.mjs";

export class BoardColumn {
  #taskComponent;

  constructor() {
    this.#taskComponent = new TaskComponent();
  }

  get TaskComponent() {
    return this.#taskComponent;
  }

  GenerateBoardColumn(column,title) {
    console.log(column);
    const component = document.createElement("div");
    component.classList.add("columnOwn");
    const titleColumn = document.createElement("h5");
    titleColumn.classList.add("card-title");
    titleColumn.textContent = title;

    const bodyColumn = document.createElement("div");
    bodyColumn.classList.add("card-body");

    column.Tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("taskContainer");
      taskContainer.addEventListener("click", () => {
        this.CaptureTaskId(task);
        setTimeout(() => {
          window.location.href = "./details.html";
        }, 400); 
      });

      const titleTask = document.createElement("p");
      titleTask.classList.add("task-title");
      titleTask.textContent = task.Name;

      const deliveryTask = document.createElement("p");
      deliveryTask.classList.add("task-delivery");
      deliveryTask.textContent = task.DeliveryDate;
      taskContainer.append(titleTask, deliveryTask);
      bodyColumn.append(taskContainer);
    });

    component.append(titleColumn, bodyColumn);
    return component;
  }

  CaptureTaskId(task) {
    localStorage.setItem("Id_Task", JSON.stringify(task.Id));
  }
}

