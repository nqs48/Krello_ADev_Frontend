"use strict";

// Services
import { MyUsersService } from "../model/services/my-users.service.mjs";

// Views
import { UpdateView } from "../view/update.view.mjs";

import { BoardModel } from "../model/board.model.mjs";

class UpdateController {
  #privateView;
  #privateMyUsersService;

  constructor() {
    this.#privateView = new UpdateView();
    this.#privateMyUsersService = new MyUsersService();
  }

  async init() {
    //this.#privateView.Data = await this.#privateMyUsersService.getBoard();
    console.log(this.#privateMyUsersService.GetStorageBoard());

    //Get simulate Data
    //this.#privateView.Data = this.#privateMyUsersService.SimulateData();

    //console.log(this.#privateView.privateData);
    this.#privateView.init();
  }
}

export const update = new UpdateController();
update.init();
