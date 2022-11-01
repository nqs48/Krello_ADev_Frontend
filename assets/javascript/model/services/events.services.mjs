import { MyUsersService } from "./my.krello.service.mjs";


export class EventServices {
  static #privateMyUsersService = new MyUsersService();

  static ingresarTarea() {
    const taskName = document.querySelector(".task-name");
    let valueTaskName = taskName.value;
    const data = {
      nameTask: valueTaskName,
    };
    this.#privateMyUsersService.insertNewTask(data);
  }

  static ingresarTablero() {
    const boardName = document.querySelector(".new-board");
    let valueBoardName = boardName.value;
    const data = {
      name: valueBoardName,
    };
    this.#privateMyUsersService.insertNewBoard(data);
  }

  static updateTask() {
    const title = document.querySelector(".title_task").value;
    const date = document.querySelector(".date_task").value;
    const desc = document.querySelector(".description_task").value;
    const column = document.querySelector(".column").value;
    const data = {
      nameTask: title,
      descriptionTask: desc,
      deliveryTask: date,
      columnTask: {
        id: Number(column),
      },
    };
    this.#privateMyUsersService.updateTask(data);
  }

  static actualizarTablero() {
    const boardName = document.querySelector(".board-name").value;
    let data = {
      name: boardName,
    };
    this.#privateMyUsersService.updateBoard(data);
  }

  static borrarTablero() {
    this.#privateMyUsersService.deleteBoardById();
  }

  static borrarTarea() {
    this.#privateMyUsersService.deleteTaskById();
  }


}
