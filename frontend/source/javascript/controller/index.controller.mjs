"use strict";
// Services
import { MyUsersService } from "../model/services/my.krello.service.mjs";
// Views
import { IndexView } from "../view/index.view.mjs";

class IndexController {
    #privateView;
    #privateMyUsersService;

    constructor() {
        this.#privateView = new IndexView();
        this.#privateMyUsersService = new MyUsersService();
    }

    async init() {
         
        this.#privateView.Data= await this.#privateMyUsersService.getBoards();
        console.log(this.#privateView.privateData);
        this.#privateView.init();
    }

    agregarTablero(){
        const boardName= document.querySelector(".new-board");
        let valueBoardName = boardName.value
        const data= {
          name: valueBoardName
        }
        this.#privateMyUsersService.insertNewBoard(data);
    }
}

export const index = new IndexController();
index.init();