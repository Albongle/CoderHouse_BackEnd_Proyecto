import OrderService from "../service/order.Service.js";

class OrderController{

    static getAllOrders(req,res)
    {
        OrderService.getAllOrders(req.user)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));

    }

    static addOneOrder(req,res)
    {
        OrderService.addOneOrder(req)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));

    }

    
}

export default OrderController;