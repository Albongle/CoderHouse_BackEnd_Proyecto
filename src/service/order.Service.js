import OrderDAO from "../dao/order.DAO.js";
import OrderMapper from "../mappers/order.Mapper.js";
import ShoppingCartMapper from "../mappers/shoppingCart.Mapper.js";
import logs from "../modules//logger/logger.js"
import ShoppingCartService from "./shoppingCart.Service.js";

const ManagerOrder = new OrderDAO();
class OrderService{

    static async addOneOrder({shoppingCart})
    {
        try 
        {
            if(shoppingCart && shoppingCart.products.length > 0)
            {
                const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject(shoppingCart);
                const orderBussinesObject = OrderMapper.getBussinesObject({shoppingCart:shoppingCartBussinesObject});
                const orderDataTransferObject = await OrderMapper.getDataTransferObject(orderBussinesObject);
                await ShoppingCartService.deleteAllProductsFromCart({shoppingCart});
    
                await ManagerOrder.addElements(orderDataTransferObject);

                return {status: "ok", message:"solicitud procesada con exito", code:200, order:orderDataTransferObject};
            }
            return {status: "atencion", message:"no se pudo procesar la solicitud, no posee un carrito con productos", code:200, shoppingCart:{}};
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al agregar un nueva orden ${error.message}`);
        }

    }

    static async getAllOrders({id})
    {
        try 
        {
            const ordersByUser = (await ManagerOrder.getAllElements()).filter(order=> order.shoppingCart.idUser === id);
            if(ordersByUser.length > 0)
            {
               
                return {status: "ok", message:"solicitud procesada con exito", code:200, orders:ordersByUser};
            }
            return {status: "atencion", message:"el usuario no posee pedidos", code:200};
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener las ordenes ${error.message}`);
        }

    }

}

export default OrderService;