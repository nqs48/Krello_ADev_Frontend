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
    document.addEventListener("click", () => {
      const formName = document.querySelector(".board-name");
      let valueF = formName.value;
      const data = {
        name: valueF,
      };
      this.#privateMyUsersService.updateBoard(
        this.#privateView.privateData.Id,
        data
      );
      console.log(valueF);
      console.log(this.#privateView.privateData.Id);
    });

    //Delete Button Modal Boostrap
    // const btnDelete = document.querySelector(".btn-bar");
    // console.log(btnDelete);
    // btnDelete.setAttribute("data-toggle", "modal");
    // btnDelete.setAttribute("data-target", "#exampleModal");

    // btnDelete.addEventListener("click", () => {
    //   const container = document.createElement("div");
    //   container.innerHTML = `
    //     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //       <div class="modal-dialog">
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //           </div>
    //           <div class="modal-body">
    //             ...
    //           </div>
    //           <div class="modal-footer">
    //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //             <button type="button" class="btn btn-primary">Save changes</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>`;
    // });

    const btnDelete = document.querySelector(".btn-bar");
    btnDelete.addEventListener("click", () => {
    console.log("Delete board Id: " + this.#privateView.privateData.Id);
    this.#privateMyUsersService.deleteBoardById(this.#privateView.privateData.Id);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 400);
 });
}
}

export const update = new UpdateController();
update.init();
