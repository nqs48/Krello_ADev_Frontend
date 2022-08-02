import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";
import { TaskModel } from "../task.model.mjs";

export class MyUsersService {
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
    const result = await fetch(`${Config.BackendURL}/board/${idBoard}`).then(
      (response) => response.json()
    );
    console.log(result);
    const board = new BoardModel(result.data);
    board.ColumnsForBoard[0].Tasks = await this.getTasksBycolumn(
      idBoard,
      board.ColumnsForBoard[0].Id.toString()
    );
    board.ColumnsForBoard[1].Tasks = await this.getTasksBycolumn(
      idBoard,
      board.ColumnsForBoard[1].Id.toString()
    );
    board.ColumnsForBoard[2].Tasks = await this.getTasksBycolumn(
      idBoard,
      board.ColumnsForBoard[2].Id.toString()
    );
    return board;
  }

  async deleteBoardById() {

    await fetch(`${Config.BackendURL}/board/${this.getBoardLocalStorage()}`,{method: "DELETE"}).then(
      (response) => response.json())
      .then(response => {
        //location.href ="/source/index.html"
        location.href = "index.html";
      });
  }

  async getUserById(id) {
    const data = await fetch(`${Config.BackendURL}/usuario/records/${id}`).then(
      (response) => response.json()
    );
    return new UserModel(data);
  }

  async updateBoard(data) {
    await fetch(`${Config.BackendURL}/board/${this.getBoardLocalStorage()}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  
  async insertNewTask(data){

    data.boardTask = {id: localStorage.getItem("Id_Board")}
    await fetch(`${Config.BackendURL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(response => console.log('Success:', response));
  }

  async updateTask(data){
    let id = this.getIdTask();
    const dat = await fetch(`${Config.BackendURL}/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }


  async insertNewBoard(data){
    await fetch(`${Config.BackendURL}/board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
      
  }
  

  async getBoard() {
    const id = localStorage.getItem("Id_Board");
    return this.getBoardById(id);
  }

  getBoardLocalStorage() {
    return localStorage.getItem("Id_Board");
  }

  async getTaskById(){
    let id = this.getIdTask();
    const result = await fetch(`${Config.BackendURL}/task/${id}`).then(
      (response) => response.json()
    );
    return new TaskModel(result.data);
  }

  getIdTask(){
    return localStorage.getItem("Id_Task");
  }

  
  async getTasksBycolumn(idBoard, idColumn) {
    const task = await fetch(`${Config.BackendURL}/tasksbycolumn/${idBoard}/${idColumn}`).then(
      (response) => response.json()
    );
    return task;
  }
}