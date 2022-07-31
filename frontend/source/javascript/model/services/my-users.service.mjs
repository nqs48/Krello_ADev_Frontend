import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";
import { ColumnsForBoard } from "../columnsBoard.model.mjs";
import { UserModel } from "../user.model.mjs";
import{ boardObj } from "../../../data/data.js";

export class MyUsersService {
  constructor() {}

  async getUsers() {
    const data = await fetch(`${Config.BackendURL}/usuario/records`).then(
      (response) => response.json()
    );
    const users = new Array();
    data.items.forEach((item) => {
      const user = new UserModel(item);
      users.push(user);
    });
    return users;
  }

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
    board.ColumnsForBoard.forEach(async (column)=>{
      const tasks = await this.getTasksBycolumn(idBoard,column.Id);
      column.setTasks(tasks.data);
    });
    console.log(board);
    return board;
  }

  async getUserById(id) {
    const data = await fetch(`${Config.BackendURL}/usuario/records/${id}`).then(
      (response) => response.json()
    );
    return new UserModel(data);
  }

  async update(id, data) {
    await fetch(`${Config.BackendURL}/usuario/records/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  SimulateData() {
    return boardObj.map((board) => new BoardModel(board));
  }

  // SimulateDataColumns(board) {
  //   return board.columnsForBoard.map((column) => new ColumnsBoardModel(column));
  // }

  async getBoard() {
    const id = localStorage.getItem("Id_Board");
    return this.getBoardById(id);
  }

  async getTasksBycolumn(idBoard,idColumn){
    return fetch(`${Config.BackendURL}/tasksbycolumn/${idBoard}/${idColumn}`).then(
      (response) => response.json()
    );

  }
}