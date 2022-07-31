import {ConfirmationCard} from "./confirmation-card.component.mjs"
export class BoardCard {
  #containerAdd;

  constructor() {
    this.#containerAdd = this.GenerateBoardCardAdd();
    
  }

  GenerateConfirmationCard(){
    const component = new ConfirmationCard();
    return component.get();
  }



  get ContainerAdd() {
    return this.#containerAdd;
  }

  GenerateBoardCard(board) {
    const component = document.createElement("a");
    component.classList.add("card", "cardOwn");
    component.href = "update.html";
    component.addEventListener("click", () => {
      this.CaptureBoardId(board);
    })

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.alt = "Board background image";
    img.src = "images/board.png";

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("card-body");

    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-title");
    titleCard.textContent = board.Name;

    const textCard = document.createElement("p");
    textCard.classList.add("card-text");
    textCard.textContent = board.CreatedAt;
    bodyCard.append(titleCard, textCard);
    component.append(img, bodyCard);
    return component;
  }

  GenerateBoardCardAdd() {
    const component = document.createElement("button");
    component.classList.add("card", "cardOwn");
    component.addEventListener("click", () => {
      window.open("images/update.html");
    })

    const img = document.createElement("img");
    img.classList.add("card-img-top", "imgCardAdd");
    img.alt = "Add new board image ";
    img.src = "images/agregar.png";

    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-title", "Card-add");
    titleCard.textContent = "Create a new board";

    component.append(img, titleCard);
    return component;
  }

  CaptureBoardId(board) {
    localStorage.setItem("Id_Board", JSON.stringify(board.Id));

    let nameId = board.Id;
    console.log("Go to board " + nameId);
  }

}
