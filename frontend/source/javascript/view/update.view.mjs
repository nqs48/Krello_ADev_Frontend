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

    console.log(this.privateData)
    const boardColumn = new BoardColumn();

    this.privateData.ColumnsForBoard.forEach(columnObject => {
      console.log(columnObject);
      const oneColumn = boardColumn.GenerateBoardColumn(columnObject);
      this.containerColumn.get().append(oneColumn);
    });


    this.#privateContainer.append(
      this.#privateNavbar.get(),
      this.containerColumn.get()
    );
  }
}
