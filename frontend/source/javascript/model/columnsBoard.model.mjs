
export class ColumnsForBoard{

    #id;
    #createdAt;
    #updatedAt;

    constructor(object){
        this.#id = object.id;
        this.#createdAt = object.createdAt;
        this.#updatedAt = object.updatedAt;
    }

    get Id(){
        return this.#id;
    }

    get CreatedAt(){
        return this.#createdAt;
    }

    get UpdatedAt(){
        return this.#updatedAt;
    }











}