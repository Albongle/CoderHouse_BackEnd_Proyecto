import {v4 as generateId} from "uuid";
class ProductBussines{

    #id;
    #name;
    #description;
    #price;
    #image;

    constructor({id,name,description,price,image})
    {
        this.#setName(name);
        this.#setDescription(description);
        this.#setPrice(price);
        this.#setImage(image);
        this.#id = id ?? generateId();
    }


    #setName(value){
        if(value){
            this.#name = value;
        }else{
            throw new Error("No se recibio el nombre necesario para la creacion del producto");
        }
    }
    #setDescription(value){
        if(value){
            this.#description = value;
        }else{
            throw new Error("No se recibio la descripcion necesaria para la creacion del producto");
        }
    }
    #setPrice(value){
        if(value){
            this.#price = value;
        }else{
            throw new Error("No se recibio el precio necesario para la creacion del producto");
        }
    }

    
    #setImage(value){
        if(value){
            this.#image = value;
        }else{
            this.#image = "https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png";
        }
    }

    get id(){
        return this.#id;
    }
    get name (){
        return this.#name;
    }
    get description (){
        return this.#description;
    }
    get price (){
        return this.#price;
    }
    get image(){
        return this.#image;
    }


}

export default ProductBussines;