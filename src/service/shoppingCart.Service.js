import ProductDAO from "../dao/product.DAO.js";
import ShoppingCartDAO from "../dao/shoppingCart.DAO.js";
import ShoppingCartMapper from "../mappers/shoppingCart.Mapper.js";
import logs from "../modules//logger/logger.js"


const ManagerShoppingCart = new ShoppingCartDAO();
const ManagerProduct = new ProductDAO();

class ShoppingCartService{

    static async createShoppingCart({user})
    {
        try 
        {
            const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject({idUser:user.id});
            const shoppingCartDataTransferObject = ShoppingCartMapper.getDataTransferObject(shoppingCartBussinesObject);
            await ManagerShoppingCart.addElements(shoppingCartDataTransferObject);

            return shoppingCartDataTransferObject;
        }
        catch(error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al crear el carrito ${error.message}`);
        }

    }

    static async getShoppingCart({user})
    {
        try
        {
            return await ManagerShoppingCart.getOneElementByFilter({idUser:user.id});
        }
        catch(error)
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al crear el carrito ${error.message}`);
        }
    }

    
    static async addOneProductToShoppingCart({productId},{shoppingCart})
    {
        try 
        {
            if(productId)
            {
                const product = await ManagerProduct.getElementsById(productId);
                if(product != null)
                {
                    const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject(shoppingCart);

                    shoppingCartBussinesObject.addProduct(productId);

                    const shoppingCartDataTransferObject = ShoppingCartMapper.getDataTransferObject(shoppingCartBussinesObject);
                    await ManagerShoppingCart.updateElementsById(shoppingCart.id,shoppingCartDataTransferObject);
                    const shoppingCartResponse = await ShoppingCartMapper.getDataTransferObjectResponse(shoppingCartBussinesObject);


                    return {status: "ok", message:"producto agregado con exito", code:201, shoppingCart:shoppingCartResponse};
                }
                return {status: "error", message:"producto inexistente", code:400};
                
            }

            throw new Error("No se recibio el producto necesario para agregar al carrito");
            
        } 
        catch(error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al agregar un producto al carrito ${error.message}`);
        }

    }

    static async getAllProductsFromShoppingCart({shoppingCart})
    {
        try 
        {
            if(shoppingCart)
            {

                const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject(shoppingCart);
     
                const shoppingCartResponse = await ShoppingCartMapper.getDataTransferObjectResponse(shoppingCartBussinesObject);
     
                return {status: "ok", message:"solicitud procesada con exito", code:200, shoppingCart:shoppingCartResponse};

            }
            return {status: "atencion", message:"no se pudo procesar la solicitud, carrito vacio", code:200, shoppingCart:{}};
        } 
        catch(error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener los productos del carrito ${error.message}`);
        }

    }

    static async deleteOneProductFromCart ({id},{shoppingCart})
    {
        try 
        {

            if(shoppingCart)
            {
                const product = await ManagerProduct.getElementsById(id);
                if(product != null)
                {
                    const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject(shoppingCart);
                    const result = shoppingCartBussinesObject.deleteOneProduct(id);
                    if(result)
                    {
                        const shoppingCartDataTransferObject = ShoppingCartMapper.getDataTransferObject(shoppingCartBussinesObject);
                        await ManagerShoppingCart.updateElementsById(shoppingCart.id,shoppingCartDataTransferObject);

                        const shoppingCartResponse = await ShoppingCartMapper.getDataTransferObjectResponse(shoppingCartBussinesObject);

                        return {status: "ok", message:"producto borrado con exito", code:200, shoppingCart:shoppingCartResponse};
                    }
                }
                return {status: "error", message:"producto inexistente", code:400}; 
            }

            return {status: "atencion", message:"no se pudo procesar la solicitud, carrito vacio", code:200, shoppingCart:{}};
            
        } 
        catch(error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener los prodcutos del carrito ${error.message}`);
        }
    }

    static async deleteAllProductsFromCart({shoppingCart})
    {
        try 
        {
            if(shoppingCart)
            {

                const shoppingCartBussinesObject = ShoppingCartMapper.getBussinesObject(shoppingCart);
                shoppingCartBussinesObject.deleteAllProducts();
                const shoppingCartDataTransferObject = ShoppingCartMapper.getDataTransferObject(shoppingCartBussinesObject);
                return await ManagerShoppingCart.updateElementsById(shoppingCart.id,shoppingCartDataTransferObject);
                    
            }           
        } 
        catch(error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener los prodcutos del carrito ${error.message}`);
        }
    }



}

export default ShoppingCartService;