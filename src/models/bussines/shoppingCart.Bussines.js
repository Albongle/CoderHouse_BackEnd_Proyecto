import {v4 as generateId} from "uuid";

class ShoppingCart{
    #id;
    #idUser;
    #products;

    constructor({id,idUser,products})
    {
        this.#setIdUser(idUser);
        this.#products = products ? new Map(products) : new Map();
        this.#id = id ?? generateId();
    }



    #setIdUser(value)
    {
        if(value)
        {
            this.#idUser = value;
        }
        else
        {
            throw new Error("El valor recibido no corresponde a un usuario");  
        }
    }

    get id()
    {
        return this.#id;
    }
    get products()
    {
        return this.#products;
    }
    get idUser()
    {
        return this.#idUser;
    }

    addProduct(product)
    {
        const productExist = this.#products.has(product);
        if(!productExist)
        {
            this.#products.set(product, 1);
        }
        else
        {
            const countInitial = this.#products.get(product);
            this.#products.set(product,countInitial + 1);
        }
    }

    deleteOneProduct(product)
    {
        const productExist = this.#products.has(product);
        if(productExist)
        {
            const count = this.#products.get(product);
            if((count - 1) < 1)
            {
                this.#products.delete(product);
            }
            else
            {
                this.#products.set(product,count - 1);
            }
            return true;
        }

        return false;

    }

    deleteAllProducts()
    {
        this.#products.clear();
    }


}


export default ShoppingCart;