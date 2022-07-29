import {v4 as generateId} from "uuid";
import { encryptPassword } from "../../modules/bcrypt/bcrypt.js";
class UserBussines{

    #id;
    #name;
    #lastname;
    #email;
    #password;
    #phone;
    #image;

    constructor({id,name,lastname,email,password,phone,image})
    {
        this.#setName(name);
        this.#setLastName(lastname);
        this.#setEmail(email);
        this.#setPassword(password);
        this.#setPhone(phone);
        this.#setImage(image);
        this.#id = id ?? generateId();
    }


    #setName(value){
        if(value)
        {
            this.#name = value;
        }
        else
        {
            throw new Error("No se recibio el nombre necesario para la creacion del usuario");
        }
    }
    #setLastName(value){
        if(value)
        {
            this.#lastname = value;
        }
        else
        {
            throw new Error("No se recibio el apellido necesario para la creacion del usuario");
        }
    }
    #setEmail(value){
        if(value)
        {
            this.#email = value;
        }
        else
        {
            throw new Error("No se recibio el email necesario para la creacion del usuario");
        }
    }
    #setPassword(value){
        if(value)
        {
            this.#password = encryptPassword(value);
            
        }
        else
        {
            throw new Error("No se recibio el password necesario para la creacion del usuairo");
        }
    }
    #setPhone(value){
        if(value)
        {
            this.#phone = value;
        }
        else
        {
            throw new Error("No se recibio el telefono necesario para la creacion del usuario");
        }
    }
    #setImage(value){
        if(value)
        {
            this.#image = value;
        }
        else
        {
            this.#image = "https://cdn-icons-png.flaticon.com/512/219/219983.png";
        }
    }

    get id(){
        return this.#id;
    }
    get name (){
        return this.#name;
    }
    get lastname (){
        return this.#lastname;
    }
    get email (){
        return this.#email;
    }
    get password(){
        return this.#password;
    }
    get phone (){
        return this.#phone;
    }
    get image(){
        return this.#image;
    }


}

export default UserBussines;
