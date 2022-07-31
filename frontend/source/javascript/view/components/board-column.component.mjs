import {TaskComponent} from "./task.component.mjs";

export class BoardColumn {

  #taskComponent;
 

  constructor() {
    
    this.#taskComponent=new TaskComponent();
  }

  get TaskComponent() {
    return this.#taskComponent;
  }



  GenerateBoardColumn(column) {
    const taskList=[]
    const component = document.createElement("div");
    component.classList.add("columnOwn");
    // component.addEventListener("click", () => {
    //   this.CaptureBoardId(board);
    // });

    // const img = document.createElement("img");
    // img.classList.add("card-img-top");
    // img.alt = "Board background image";
    // img.src = "../../../images/board.png";

    const titleColumn = document.createElement("h5");
    titleColumn.classList.add("card-title");
    titleColumn.textContent = column.Name;

    const bodyColumn = document.createElement("div");
    bodyColumn.classList.add("card-body");

    

    column.Tasks.forEach((task) => {
      // const taskColumnContainer =
      //   this.#taskComponent.get.#GenerateTaskColumn(task);
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("taskContainer");
      taskContainer.addEventListener("click", () => {
        console.log(task.id)
      })

      const titleTask = document.createElement("p");
      titleTask.classList.add("task-title");
      titleTask.textContent = task.title;

      const deliveryTask = document.createElement("p");
      deliveryTask.classList.add("task-delivery");
      deliveryTask.textContent = task.deliveryDate;
      taskContainer.append(titleTask, deliveryTask);

      bodyColumn.append(taskContainer);
    });

    
    

    // const textCard = document.createElement("p");
    // textCard.classList.add("card-text");
    // textCard.textContent = board.CreatedAt;

    // const buttonDelete = document.createElement("button");
    // buttonDelete.classList.add("btn", "btn-danger");
    // buttonDelete.textContent = "Delete";
    // buttonDelete.addEventListener("click",function(){
    //   console.log("Delete board");
    // })

    component.append(titleColumn,bodyColumn);
    return component;
  }
}

