import ProductBussines from "../models/bussines/product.Bussines.js";

class ProductMapper{

    static getDataTransferObjectWithId(bussinesObject)
    {
        return{
            id:bussinesObject.id,
            name:bussinesObject.name,
            description:bussinesObject.description,
            price:bussinesObject.price,
            image:bussinesObject.image,
        };
    }
    static getDataTransferObject(bussinesObject)
    {
        return{
            name:bussinesObject.name,
            description:bussinesObject.description,
            price:bussinesObject.price,
            image:bussinesObject.image,
        };
    }

    static getBussinesObject(dataTransferObject)
    {
        return new ProductBussines(dataTransferObject);
    }


    
}

export default ProductMapper;