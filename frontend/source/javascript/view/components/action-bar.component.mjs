import { EventServices } from "../../model/services/events.services.mjs";

export class ActionBar {

  static GenerateBar(board) {
    const actionBoardBar = document.createElement("div");
    actionBoardBar.classList.add("action-board-bar");

    //formulario readonly
    const boardName = document.createElement("input");
    boardName.classList.add("board-name");
    boardName.type = "text";
    boardName.value = board.Name;
    
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger", "btn-bar");
    buttonDelete.textContent = "Delete";
    buttonDelete.addEventListener("click", () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Está seguro que desea borrar el tablero?',
        text: "Esta acción no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          EventServices.borrarTablero();

        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    });


    const insert = document.createElement("input");
    insert.classList.add("task-name");
    insert.type = "text";
    insert.placeholder = "Ingrese nombre de la tarea";

    const buttonAdd = document.createElement("button");
    buttonAdd.classList.add("btn", "btn-primary", "btn-bar");
    buttonAdd.textContent = "Add New task";
    buttonAdd.addEventListener("click", function () {
            EventServices.ingresarTarea();
            location.reload();
        });
    //Asignando elementos a contenedor
    actionBoardBar.append(boardName,insert,buttonAdd,buttonDelete);

    return actionBoardBar;
  }
}
