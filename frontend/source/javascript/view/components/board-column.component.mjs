export class BoardColumn {
 

  constructor() {
    
  }



  GenerateBoardColumn(columna) {
    const component = document.createElement("div");
    component.classList.add("card", "columnOwn");
    // component.addEventListener("click", () => {
    //   this.CaptureBoardId(board);
    // });

    // const img = document.createElement("img");
    // img.classList.add("card-img-top");
    // img.alt = "Board background image";
    // img.src = "../../../images/board.png";

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("card-body");

    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-title");
    titleCard.textContent = columna.Name;

    // const textCard = document.createElement("p");
    // textCard.classList.add("card-text");
    // textCard.textContent = board.CreatedAt;

    // const buttonDelete = document.createElement("button");
    // buttonDelete.classList.add("btn", "btn-danger");
    // buttonDelete.textContent = "Delete";
    // buttonDelete.addEventListener("click",function(){
    //   console.log("Delete board");
    // })

    bodyCard.append(titleCard);
    component.append(bodyCard);
    return component;
  }
}

