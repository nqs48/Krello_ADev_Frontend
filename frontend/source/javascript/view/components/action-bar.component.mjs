import { EventServices } from "../../model/services/events.services.mjs";

export class ActionBar {

  static GenerateBar(board) {
    const actionBoardBar = document.createElement("div");
    actionBoardBar.classList.add("action-board-bar");

    //formulario readonly
    const boardName = document.createElement("input");
    boardName.classList.add("board-name");
    boardName.type = "text";
    boardName.value = board.Name;
    
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger", "btn-bar");
    buttonDelete.textContent = "Delete";
    buttonDelete.addEventListener("click", function () {
      console.log("Delete board");
    });


    const insert = document.createElement("input");
    insert.classList.add("task-name");
    insert.type = "text";
    insert.placeholder = "Ingrese nombre de la tarea";

    const buttonAdd = document.createElement("input");
    buttonAdd.classList.add("btn", "btn-primary", "btn-bar");
    buttonAdd.value = "Add New task";
    buttonAdd.type = "submit";
    buttonAdd.addEventListener("click", function () {
            EventServices.insertNewTask();
            location.reload();
        });
    //Asignando elementos a contenedor
    actionBoardBar.append(boardName,insert,buttonAdd,buttonDelete);

    return actionBoardBar;
  }
}
