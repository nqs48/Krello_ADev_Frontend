"use strict";

// Services
import { MyUsersService } from "../model/services/my-users.service.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

import { BoardModel } from "../model/board.model.mjs" 

class IndexController {
    #privateView;
    #privateMyUsersService;

    constructor() {
        this.#privateView = new IndexView();
        this.#privateMyUsersService = new MyUsersService();
    }

    async init() {
      


        //this.#privateView.Data = await this.#privateMyUsersService.getBoard();
        
        //Get simulate Data      
        this.#privateView.Data= await this.#privateMyUsersService.getBoards();
        
        console.log(this.#privateView.privateData);
        this.#privateView.init();
    }
}

export const index = new IndexController();
index.init();