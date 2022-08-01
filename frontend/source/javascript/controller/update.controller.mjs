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
    //Get simulate Data
    this.#privateView.Data = await this.#privateMyUsersService.getBoard();
    //console.log(this.#privateView.privateData);
    this.#privateView.init();

    //Event Update board name
    document.addEventListener("click", ()=>{
      const formName= document.querySelector(".board-name");
      let valueF=formName.value
      const data= {
        name: valueF
      }
      this.#privateMyUsersService.updateBoard(this.#privateView.privateData.Id,data);
      console.log(valueF);
      console.log(this.#privateView.privateData.Id);
    })

    //Event Delete Button
    const btnDelete = document.querySelector(".btn-bar");

    btnDelete.addEventListener("click", ()=>{
      console.log("Delete board Id: " + this.#privateView.privateData.Id);
      this.#privateMyUsersService.deleteBoardById(this.#privateView.privateData.Id);
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 400);
      
    }

    )
  }
}

export const update = new UpdateController();
update.init();
