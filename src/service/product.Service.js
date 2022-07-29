import ProductDAO from "../dao/product.DAO.js";
import ProductMapper from "../mappers/product.Mapper.js";
import logs from "../modules//logger/logger.js"



const ManagerProduct = new ProductDAO();

class ProductService{

    static async getAllProducts()
    {
        try 
        {
            const response = await ManagerProduct.getAllElements();
            return response.length > 0 ? {status: "ok", message:"solicitud procesada con exito", code:200, products:response.map(p => ProductMapper.getDataTransferObjectWithId(p))} : {status: "atencion", code:200, message:"no hay productos para mostrar", products:[]};
            
        }
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener los productos ${error.message}`);
        }

    }

    static async addOneProduct(product)
    {
        try 
        {
            const productBussinesObject = ProductMapper.getBussinesObject(product);
            const productDataTransferObject = ProductMapper.getDataTransferObjectWithId(productBussinesObject);
            const response = await ManagerProduct.addElements(productDataTransferObject);
            return response ? {status: "ok", message:"producto agregado con exito", code:201, product:productDataTransferObject} : {status: "atencion", code:200, message:"producto existente"};

        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al agregar un producto ${error.message}`);
        }
        
    }

    static async getOneProduct({id})
    {
        try 
        {
            const response = await ManagerProduct.getElementsById(id);
            return response != null ? {status: "ok", message:"solicitud procesada con exito", code:200,product:ProductMapper.getDataTransferObjectWithId(response)} : {status: "atencion", code:200, message:"producto inexistente"};

        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al obtener un producto ${error.message}`);
        }
    }

    static async updateOneProduct({id},product)
    {
        try 
        {
            const productBussinesObject = ProductMapper.getBussinesObject(product);
            const productDataTransferObject = ProductMapper.getDataTransferObject(productBussinesObject);
            const response = await ManagerProduct.updateElementsById(id,productDataTransferObject);
            return response != null ? {status: "ok", message:"actualizacion procesada con exito", code:200, product:productDataTransferObject} : {status: "atencion", code:200, message:"producto inexistente"};
    
        }
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al agregar un producto ${error.message}`);
        }
    }

    static async deleteOneProduct({id})
    {
        try 
        {
            const response = await ManagerProduct.deleteElementById(id);
            return response != null ? {status: "ok", message:"prodcuto eliminado con exito", code:200} : {status: "atencion", code:200, message:"producto inexistente"};
            
        }
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al borrar un producto ${error.message}`);
        }
    }

    static async addImageToProduct(file,{id})
    {
        try 
        {
            if(file)
            {
                const product = await ManagerProduct.getElementsById(id);
                if(product)
                {
                    product.image = `\\images\\products\\${file.filename}`;
                    await ManagerProduct.updateElementsById(id,product);
                    return {status: "ok", message:"imagen cargada con exito",code:200, product:ProductMapper.getDataTransferObjectWithId(product)};
                }
                return {status: "atencion", code:200, message:"producto inexistente"};
            }
            else
            {
                return {status:"ok", code:204, message:"no se recibio la imagen necesaria"};
            }

            
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al cargar la imagen del producto ${error.message}`);
            
        }
    }

}



export default ProductService;