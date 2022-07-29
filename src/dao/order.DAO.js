import ManagerMongoDb from "../database/managerMongoDb.js";
import OrderModel from "../models/schemas/order.Schema.js"

class OrderDAO extends ManagerMongoDb{
    constructor()
    {
        super(OrderModel);
    }
}

export default OrderDAO;