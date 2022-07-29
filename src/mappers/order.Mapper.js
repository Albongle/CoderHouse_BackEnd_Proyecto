import OrderBussines from "../models/bussines/order.Bussines.js";
import ShoppingCartMapper from "./shoppingCart.Mapper.js";
class OrderMapper{


    static async getDataTransferObject(bussinesObject)
    {
 
        return{
            id:bussinesObject.id,
            datetime:bussinesObject.datetime,
            shoppingCart:await ShoppingCartMapper.getDataTransferObjectResponse(bussinesObject.shoppingCart)
        };
    }


    static getBussinesObject(dataTransferObject)
    {
        return new OrderBussines(dataTransferObject);
    }

}

export default OrderMapper;