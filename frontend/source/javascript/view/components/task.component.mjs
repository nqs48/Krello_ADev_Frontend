export class TaskComponent {
  GenerateTaskColumn(task) {
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

  static GenerateModalTask(task) {
    //main container
    const modalClose = document.createElement("div");
    modalClose.classList.add("containerDetails");

    const imgClose = document.createElement("img");
    imgClose.classList.add("img_task");
    imgClose.src = "images/board.png";
    imgClose.alt = "window background image";

    //container texts
    const taskTextContainer = document.createElement("div");
    taskTextContainer.classList.add("container_text");

    //title task
    const titleTask = document.createElement("input");
    titleTask.classList.add("title_task", "board-name", "input");
    titleTask.type = "text";
    titleTask.value = "task.Name";
  

    //date task
    const dateTask = document.createElement("input");
    dateTask.classList.add("date_task", "board-name", "input");
    dateTask.type = "date";
    dateTask.value = "task.DeliveryDate";

    //description Task
    const descriptionTask = document.createElement("textarea");
    descriptionTask.classList.add("description_task", "board-name", "input");
    descriptionTask.textContent = "task.Description";

    //container buttons
    const comboBoxColumn = document.createElement("select");
    comboBoxColumn.classList.add(
      "description_task",
      "board-name",
      "comboBoxColumn"
    );

    const comboBoxColumnOption1 = document.createElement("option");
    comboBoxColumnOption1.textContent = "task.Column 1";

    const comboBoxColumnOption2 = document.createElement("option");
    comboBoxColumnOption2.textContent = "task.Column 2";

    const comboBoxColumnOption3 = document.createElement("option");
    comboBoxColumnOption3.textContent = "task.Column 3";

    comboBoxColumn.append(comboBoxColumnOption1, comboBoxColumnOption2, comboBoxColumnOption3);


    //container log Task
    const containerLogs = document.createElement("div");
    containerLogs.classList.add("container_logs");
    //data.logs.forEach(log => renderLogs(log,containerLogs))

    //Add all texts to containerText without ContainerLogs
    taskTextContainer.append(
      titleTask,
      dateTask,
      descriptionTask,
      comboBoxColumn,
      containerLogs
    );

    const buttonUpdate = document.createElement("button");
    buttonUpdate.classList.add("btn", "btn-primary", "btn-task");
    buttonUpdate.textContent = "Apply";

    modalClose.append(imgClose, taskTextContainer, buttonUpdate);

    return modalClose;
  }

  
  renderLogs(log, containerFather) {
    const logText = document.createElement("p");
    logText.textContent = log;
    containerFather.appendChild(logText);
  }


}
