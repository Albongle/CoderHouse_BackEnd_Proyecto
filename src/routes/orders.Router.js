import express  from "express";
import OrderController from "../controllers/orders.Controller.js";
import middleware from "../middlewares/user.Middlewares.js";


const router = express.Router();


router.get("",middleware.isAuthenticated, OrderController.getAllOrders);

router.post("",middleware.isAuthenticated,middleware.getCartFromUser, OrderController.addOneOrder);


export default router;