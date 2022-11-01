"use strict";
// Services
import { MyUsersService } from "../model/services/my.krello.service.mjs";

// Views
import { DetailsView } from "../view/details.view.mjs";


class DetailsController {
  #privateView;
  #privateMyUsersService;

  constructor() {
    this.#privateView = new DetailsView();
    this.#privateMyUsersService = new MyUsersService();
  }

  async init() {

    //Get Tasks for Id
    this.#privateView.Data = await this.#privateMyUsersService.getTaskById();
    //console.log(this.#privateView.privateData);
    this.#privateView.init();
  }

  actualizarTarea(){
    const title= document.querySelector(".title_task").value;
    const date= document.querySelector(".date_task").value;
    const desc= document.querySelector(".description_task").value;
    const column= document.querySelector(".column").value;
    const data= {
          nameTask: title,
          descriptionTask: desc,
          deliveryTask: date,
          columnTask: {
            id: Number(column)
          }
        }
        this.#privateMyUsersService.updateTask(data);
  }
}

export const details = new DetailsController();
details.init();
