"use strict";

import { Navbar } from "./components/navbar.component.mjs";
import { Container } from "./components/container.component.mjs";
import { BoardCard } from "./components/board-card.component.mjs";

export class IndexView {
  #privateContainer;
  #privateNavbar;
  containerBoard;
  privateData;

  constructor() {
    this.#privateContainer = document.getElementById("container");
    this.#privateNavbar = new Navbar();
    this.containerBoard = new Container();
  }

  set Data(data) {
    this.privateData = data;
  }

  init() {
    
    if (localStorage.getItem("Bg_Color") == null) {
      this.setColor();
    }
    this.getColorLocalStorage();
    const card = new BoardCard();
    this.containerBoard.get().append(card.ContainerAdd);
    this.privateData.map((board) => {
      this.containerBoard.get().append(card.GenerateBoardCard(board));
    });

    this.#privateContainer.append(
      this.#privateNavbar.get(),
      this.containerBoard.get()
    );
  }

  getColorLocalStorage() {
    const body = document.getElementById("body");
    const currentColor = localStorage.getItem("Bg_Color");
    document.body.style.background = currentColor.replace(/['"]+/g, "");
  }

  setColor() {
    localStorage.setItem("Bg_Color", "");
  }
}
