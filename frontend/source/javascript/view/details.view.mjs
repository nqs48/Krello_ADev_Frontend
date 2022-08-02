"use strict";

import { Navbar } from "./components/navbar.component.mjs";
import { Container } from "./components/container.component.mjs";
import { BoardColumn } from "./components/board-column.component.mjs";
import { TaskComponent } from "./components/task.component.mjs";

export class DetailsView {
  #privateContainer;
  #privateNavbar;
  containerDetailsTask;
  privateData;

  constructor() {
    this.#privateContainer = document.getElementById("container");
    this.#privateNavbar = new Navbar();
    this.containerDetailsTask = new Container();
  }

  set Data(data) {
    this.privateData = data;
  }

  init() {
    console.log(this.privateData);
    const taskDt=TaskComponent.GenerateModalTask(this.privateData);
    // const actionBoardBar = ActionBar.GenerateBar(this.privateData);

    // const boardColumn = new BoardColumn();

    // this.privateData.ColumnsForBoard.forEach((columnObject) => {
    //   //console.log(columnObject);
    //   const oneColumn = boardColumn.GenerateBoardColumn(columnObject);
    //   this.containerColumn.get().append(oneColumn);
    // });
    
    this.containerDetailsTask.get().append(taskDt);

    this.#privateContainer.append(
      this.#privateNavbar.get(),
      this.containerDetailsTask.get()
    );

  }
}
