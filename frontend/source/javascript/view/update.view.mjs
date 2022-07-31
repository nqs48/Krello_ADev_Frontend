"use strict";

import { Navbar } from "./components/navbar.component.mjs";
import { Container } from "./components/container.component.mjs";
import {BoardColumn} from "./components/board-column.component.mjs";

export class UpdateView {
  #privateContainer;
  #privateNavbar;
  containerColumn;
  privateData;

  constructor() {
    this.#privateContainer = document.getElementById("container");
    this.#privateNavbar = new Navbar();
    this.containerColumn = new Container();
  }

  set Data(data) {
    this.privateData = data;
  }

  init() {
    // const elementModal = document.createElement("div");
    // elementModal.innerHTML = `
    //   <!-- Button trigger modal -->
    //   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //     Delete board
    //   </button>
    //   <!-- Modal -->
    //   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title" id="exampleModalLabel">Do you want delete this board?</h5>
    //           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div class="modal-body">
    //           Academia de ingles de platzi.
    //         </div>
    //         <div class="modal-footer">
    //           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    //           <button type="button" class="btn btn-alert">Delete</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`;
    // this.containerBoard.get().append(elementModal);

    

    
    console.log(this.privateData)
    const colum = new BoardColumn();

    this.privateData.forEach(column => {
      console.log(column)
      
      const columna=colum.GenerateBoardColumn(column);
      this.containerColumn.get().append(columna);
    });


    this.#privateContainer.append(
      this.#privateNavbar.get(),
      this.containerColumn.get()
    );
  }
}
