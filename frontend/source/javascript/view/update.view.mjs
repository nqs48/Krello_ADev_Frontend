"use strict";

import { Navbar } from "./components/navbar.component.mjs";
import { Container } from "./components/container.component.mjs";
import {BoardColumn} from "./components/board-column.component.mjs";

export class UpdateView {
  #privateContainer;
  #privateNavbar;
  containerColumn;
  privateData;

  constructor() {
    this.#privateContainer = document.getElementById("container");
    this.#privateNavbar = new Navbar();
    this.containerColumn = new Container();
  }

  set Data(data) {
    this.privateData = data;
  }

  init() {

    const actionBoardBar = document.createElement("div");
    actionBoardBar.classList.add("action-board-bar");

    //formulario readonly
    const boardName = document.createElement("input");
    boardName.classList.add("board-name");
    boardName.type = "text";
    boardName.value = "Title Board";

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


    console.log(this.privateData)
    const boardColumn = new BoardColumn();

    this.privateData.ColumnsForBoard.forEach(columnObject => {
      console.log(columnObject);
      const oneColumn = boardColumn.GenerateBoardColumn(columnObject);
      this.containerColumn.get().append(oneColumn);
    });


    this.#privateContainer.append(
      this.#privateNavbar.get(),actionBoardBar,
      this.containerColumn.get()
    );
  }
}
