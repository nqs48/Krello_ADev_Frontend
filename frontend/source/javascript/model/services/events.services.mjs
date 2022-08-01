import { MyUsersService } from "./my.krello.service.mjs";


export class EventServices {

    static #privateMyUsersService = new MyUsersService();

    static insertNewTask(){
        const taskName= document.querySelector(".task-name");
        let valueTaskName = taskName.value
        const data= {
          nameTask: valueTaskName
        }
        this.#privateMyUsersService.insertNewTask(data);
        
    }

    static insertNewBoard(){
        const boardName= document.querySelector(".new-board");
        let valueBoardName = boardName.value
        const data= {
          name: valueBoardName
        }
        this.#privateMyUsersService.insertNewBoard(data);
        
    }


}
