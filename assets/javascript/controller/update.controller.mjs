"use strict";
import { EventServices } from "../model/services/events.services.mjs";
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

    window.addEventListener("click",()=>{
      EventServices.actualizarTablero();
    });
  }
    agregarNuevaTarea(){
      const taskName= document.querySelector(".task-name");
        let valueTaskName = taskName.value
        const data= {
          nameTask: valueTaskName
        }
        this.#privateMyUsersService.insertNewTask(data);
    }
}


export const update = new UpdateController();
update.init();
