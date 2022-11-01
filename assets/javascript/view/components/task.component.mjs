import { EventServices } from "../../model/services/events.services.mjs";

export class TaskComponent {
  GenerateTaskColumn(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskContainer.addEventListener("click", () => {
      console.log(task.Id);
    });

    const titleTask = document.createElement("p");
    titleTask.classList.add("task-title");
    titleTask.textContent = task.Name;

    const deliveryTask = document.createElement("p");
    deliveryTask.classList.add("task-delivery");
    deliveryTask.textContent = task.DeliveryDate;
    taskContainer.append(titleTask, deliveryTask);

    return taskContainer;
  }

  static GenerateModalTask(task) {
    //main container
    console.log(task);
    const modalClose = document.createElement("div");
    modalClose.classList.add("containerDetails");

    const imgClose = document.createElement("img");
    imgClose.classList.add("img_task");
    imgClose.src = "assets/images/board.png";
    imgClose.alt = "window background image";

    //container texts
    const taskTextContainer = document.createElement("div");
    taskTextContainer.classList.add("container_text");

    //title task
    const titleTask = document.createElement("input");
    titleTask.classList.add("title_task", "board-name", "input");
    titleTask.type = "text";
    titleTask.value = task.Name;
  
    //date task
    const dateTask = document.createElement("input");
    dateTask.classList.add("date_task", "board-name", "input");
    dateTask.type = "date";
    dateTask.value = task.DeliveryDate;

    //description Task
    const descriptionTask = document.createElement("textarea");
    descriptionTask.classList.add("description_task", "board-name", "input");
    descriptionTask.textContent = task.Description;

    //container buttons
    const comboBoxColumn = document.createElement("select");
    comboBoxColumn.classList.add(
      "column"
    );

    const comboBoxColumnOption1 = document.createElement("option");
    comboBoxColumnOption1.textContent = "Por Realizar";
    comboBoxColumnOption1.value = "1";
    
    const comboBoxColumnOption2 = document.createElement("option");
    comboBoxColumnOption2.textContent = "En Progreso";
    comboBoxColumnOption2.value = "2";

    const comboBoxColumnOption3 = document.createElement("option");
    comboBoxColumnOption3.textContent = "Terminado";
    comboBoxColumnOption3.value = "3";

    comboBoxColumn.append(comboBoxColumnOption1, comboBoxColumnOption2, comboBoxColumnOption3);


    //container log Task
    const containerLogs = document.createElement("div");
    containerLogs.classList.add("container_logs");
    task.Logs.forEach((log) => {
        const logText = document.createElement("p");
        logText.textContent = log.createdAt;
        containerLogs.append(logText);
    });

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
    buttonUpdate.textContent = "Aplicar";
    buttonUpdate.addEventListener("click",()=>{
      EventServices.updateTask();
      //location.href ="/source/update.html";
      location.href = "update.html";
    });

    const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "Eliminar Tarea"; 
      buttonDelete.classList.add("btn", "btn-danger");
      buttonDelete.addEventListener("click", () => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "¿Está seguro que desea eliminar la tarea?",
            text: "Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminarla!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              EventServices.borrarTarea();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "Cancelado",
                "Tu archivo imaginario esta seguro :)",
                "error"
              );
            }
          });
      });

    modalClose.append(
      imgClose,
      taskTextContainer,
      buttonUpdate,
      buttonDelete
    );
    return modalClose;
  }

  
  // renderLogs(log, containerFather) {
  //   const logText = document.createElement("p");
  //   logText.textContent = log;
  //   containerFather.appendChild(logText);
  // }


}
