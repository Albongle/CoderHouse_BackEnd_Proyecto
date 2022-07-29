import {v4 as generateId} from "uuid";


class OrderBussines{
    #id;
    #datetime;
    #shoppingCart;
    constructor ({datetime,shoppingCart}) 
    {
        this.#datetime = datetime ?? new Date();
        this.#setShoppingCart(shoppingCart);
        this.#id = generateId();
    }

    #setShoppingCart(value)
    {
        if(value)
        {
            this.#shoppingCart = value;
        }
        else
        {
            throw new Error("El valor recibido no corresponde carrito");  
        }
    }

    get id()
    {
        return this.#id;
    }
    get datetime()
    {
        return this.#datetime;
    }
    get shoppingCart()
    {
        return this.#shoppingCart;
    }



}

export default OrderBussines;