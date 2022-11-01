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
    buttonDelete.classList.add("btn", "btn-outline-danger", "btn-bar");
    buttonDelete.textContent = "Eliminar";
    buttonDelete.addEventListener("click", () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons
        .fire({
          title: "¿Está seguro que desea eliminar el tablero?",
          text: "Esta acción no se puede revertir!",
          icon: "warning",
          buttonText: "Cancelar",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            EventServices.borrarTablero();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "Tu archivo imaginario esta seguro :)",
              "error"
            );
          }
        });
    });


    const insert = document.createElement("input");
    insert.classList.add("task-name");
    insert.type = "text";
    insert.placeholder = "Titulo nueva tarea";

    const buttonAdd = document.createElement("button");
    buttonAdd.classList.add("btn", "btn-outline-info" ,"btn-bar");
    buttonAdd.textContent = "Agregar Tarea";
    buttonAdd.addEventListener("click", function () {
            EventServices.ingresarTarea();
            location.reload();
        });
    //Asignando elementos a contenedor
    actionBoardBar.append(boardName, insert, buttonAdd, buttonDelete);

    return actionBoardBar;
  }
}
