import ProductService from "../service/product.Service.js";


class ProductsController{

    static getAllProducts(req,res)
    {
        ProductService.getAllProducts(req.body)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static addOneProduct(req,res)
    {
        ProductService.addOneProduct(req.body)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }
    
    static getOneProduct(req, res)
    {
        ProductService.getOneProduct(req.params )
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static updateOneProduct(req,res)
    {
        ProductService.updateOneProduct(req.params, req.body)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }
    static deleteOneProduct(req, res)
    {
        ProductService.deleteOneProduct(req.params)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static uploadImage(req,res)
    {
        ProductService.addImageToProduct(req.file, req.params)
        .then(data=> res.send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));   
    }
}


export default ProductsController;