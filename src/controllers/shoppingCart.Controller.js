import ShoppingCartService from "../service/shoppingCart.Service.js";


class ShoppingCartController{

    static addOneProductToCart(req, res)
    {
        ShoppingCartService.addOneProductToShoppingCart(req.body,req)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static getAllProductsFromCart(req, res)
    {
        ShoppingCartService.getAllProductsFromShoppingCart(req)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static deleteOneProductFromCart(req, res)
    {
        ShoppingCartService.deleteOneProductFromCart(req.params,req)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    
}

export default ShoppingCartController;