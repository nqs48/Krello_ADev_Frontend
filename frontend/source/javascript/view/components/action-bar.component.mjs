export class ActionBar {
  // #container;

  // constructor() {
  //   this.#GenerateContainer();
  // }

  // get() {
  //   return this.#container;
  // }

  static GenerateBar(board) {
    const actionBoardBar = document.createElement("div");
    actionBoardBar.classList.add("action-board-bar");

    //formulario readonly
    const boardName = document.createElement("input");
    boardName.classList.add("board-name");
    boardName.type = "text";
    boardName.value = board.Name;

    // const buttonUpdate = document.createElement("button");
    // buttonUpdate.classList.add("btn", "btn-primary", "btn-bar");
    // buttonUpdate.textContent = "Update";
    // buttonUpdate.addEventListener("click", function () {
    //   console.log("Update board");
    // });

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger", "btn-bar");
    buttonDelete.textContent = "Delete";
    buttonDelete.addEventListener("click", function () {
      console.log("Delete board");
    });

    //Asignando elementos a contenedor
    actionBoardBar.append(boardName, buttonDelete);

    return actionBoardBar;
  }
}
