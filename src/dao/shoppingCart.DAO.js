import ManagerMongoDb from "../database/managerMongoDb.js";
import ShoppingCartModel from "../models/schemas/shoppingCart.Schema.js"

class ShoppingCartDAO extends ManagerMongoDb{
    constructor()
    {
        super(ShoppingCartModel);
    }
}

export default ShoppingCartDAO;