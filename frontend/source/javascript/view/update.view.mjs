'use strict';

import { Navbar } from "./components/navbar.component.mjs";
import { Container } from "./components/container.component.mjs";

export class UpdateView {
    #privateContainer;
    #privateNavbar;
    containerBoard;
    privateData;

    constructor() {
        this.#privateContainer = document.getElementById('container');
        this.#privateNavbar = new Navbar();
        this.containerBoard = new Container();
    }

    set Data(data) {
        this.privateData = data;
    }

    init() {
        document.Title = "Board | Krello";
        this.#privateContainer.append(
          this.#privateNavbar.get(),
          this.containerBoard.get()
        );
    }
  }