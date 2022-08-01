"use strict";
// Services
import { MyUsersService } from "../model/services/my.krello.service.mjs";

// Views
import { UpdateView } from "../view/update.view.mjs";

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
  }
}

export const update = new UpdateController();
update.init();
