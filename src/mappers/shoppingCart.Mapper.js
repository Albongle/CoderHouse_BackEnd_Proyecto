import ShoppingCart from "../models/bussines/shoppingCart.Bussines.js";
import ProductMapper from "./product.Mapper.js";
import ProductDAO from "../dao/product.DAO.js";
const ManagerProduct = new ProductDAO();
class ShoppingCartMapper{


    static getDataTransferObject(bussinesObject)
    {
        return{
            id:bussinesObject.id,
            idUser:bussinesObject.idUser,
            products:Array.from(bussinesObject.products)
        };
    }

    static async getDataTransferObjectResponse(shoppingCartBussinesObject)
    {
        const productsShoppingCart = await ManagerProduct.getElementsByFilter({id:{$in:Array.from(shoppingCartBussinesObject.products.keys())}});
  
        return{
            id:shoppingCartBussinesObject.id,
            idUser:shoppingCartBussinesObject.idUser,
            products:Array.from(shoppingCartBussinesObject.products).map(p=>{
                return{
                    product:ProductMapper.getDataTransferObjectWithId(productsShoppingCart.find(psc=> psc.id === p[0])),
                    count:p[1]
                };
            })
        };
    }

    static getBussinesObject(dataTransferObject)
    {
        return new ShoppingCart(dataTransferObject);
    }
}


export default ShoppingCartMapper;