import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";

export class MyUsersService {

  async getBoards() {
    const result = await fetch(`${Config.BackendURL}/boards`).then((response) =>
      response.json()
    );
    return result.data.map((board) => new BoardModel(board));
    
  }
 
  async getBoardById(idBoard) {
    const result = await fetch(`${Config.BackendURL}/board/${idBoard}`).then((response) =>
                                                                          response.json());

    const board = new BoardModel(result.data);
    board.ColumnsForBoard[0].Tasks = await this.getTasksBycolumn(idBoard,board.ColumnsForBoard[0].Id.toString());
    board.ColumnsForBoard[1].Tasks = await this.getTasksBycolumn(idBoard,board.ColumnsForBoard[1].Id.toString());
    board.ColumnsForBoard[2].Tasks = await this.getTasksBycolumn(idBoard,board.ColumnsForBoard[2].Id.toString());
    return board;
  }

  async updateBoard(id, data) {
    await fetch(`${Config.BackendURL}/board/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  
  async insertNewTask(data){

    data.boardTask = {id: localStorage.getItem("Id_Board")}
    await fetch(`${Config.BackendURL}/task/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  async insertNewBoard(data){
    
    await fetch(`${Config.BackendURL}/board/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
  

  async getBoard() {
    const id = localStorage.getItem("Id_Board");
    return this.getBoardById(id);
  }


  getIdTask(){
    return localStorage.getItem("Id_Task");
  }

  async getTasksBycolumn(idBoard,idColumn){
    const task = await fetch(`${Config.BackendURL}/tasksbycolumn/${idBoard}/${idColumn}`).then(
      (response) => response.json()
    );
    return task;

  }
}