import ManagerMongoDb from "../database/managerMongoDb.js";
import ProductModel from "../models/schemas/product.Schema.js"

class ProductDAO extends ManagerMongoDb{
    constructor()
    {
        super(ProductModel);
    }
}

export default ProductDAO;