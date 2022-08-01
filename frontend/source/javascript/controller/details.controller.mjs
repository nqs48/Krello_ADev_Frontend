"use strict";
// Services
import { MyUsersService } from "../model/services/my-users.service.mjs";

// Views
import { DetailsView } from "../view/details.view.mjs";

import { BoardModel } from "../model/board.model.mjs";

class DetailsController {
  #privateView;
  #privateMyUsersService;

  constructor() {
    this.#privateView = new DetailsView();
    this.#privateMyUsersService = new MyUsersService();
  }

  async init() {

    //Get Tasks for Id
    this.#privateView.Data = await this.#privateMyUsersService.getBoard();
    //console.log(this.#privateView.privateData);
    this.#privateView.init();

  }
}

export const details = new DetailsController();
details.init();
