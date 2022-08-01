export class TaskComponent {

  
  #containerModalTaskDetails;
  #containerTaskColumn;

  // constructor() {
  // }

  // get() {
  //   return this.containerTask;
  // }

  #GenerateTaskColumn(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskContainer.addEventListener("click", () => {
      console.log(task.id);
    });

    const titleTask = document.createElement("p");
    titleTask.classList.add("task-title");
    titleTask.textContent = task.title;

    const deliveryTask = document.createElement("p");
    deliveryTask.classList.add("task-delivery");
    deliveryTask.textContent = task.deliveryDate;
    taskContainer.append(titleTask, deliveryTask);

    return taskContainer;
  }



  #GenerateModalTask(data) {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");

    const modalClose = document.createElement("div");
    modalClose.classList.add("modal", "modal-close");

    const closeText = document.createElement("p");
    closeText.classList.add("close");
    closeText.textContent = "X";

    const imgClose = document.createElement("img");
    imgClose.classList.add("close");
    imgClose.src = "#";
    imgClose.alt = "window background image";

    //container texts
    const taskTextContainer = document.createElement("div");
    taskTextContainer.classList.add("modal-textos");

    //title task
    const titleTask = document.createElement("h2");
    titleTask.classList.add("modal-textos");
    titleTask.textContent = "Title Task";

    //date task
    const dateTask = document.createElement("h3");
    dateTask.textContent = "11/02/2022 23:00";

    //description Task
    const descriptionTask = document.createElement("p");
    descriptionTask.textContent = "This is the description of the task";

    //container log Task
    // const containerLogs = document.createElement("div");
    // data.logs.forEach(log => renderLogs(log,containerLogs))

    //Add all texts to containerText without ContainerLogs
    taskTextContainer.append(titleTask, dateTask, descriptionTask);


    this.#containerModalTaskDetails = modalContainer;

  }

  renderLogs(log, containerFather){
    const logText = document.createElement("p");
    logText.textContent = log;
    containerFather.appendChild(logText);
  }



  


  
}
