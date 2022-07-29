import express  from "express";
import productsApi from "./products.Router.js";
import userApi from "./user.Router.js";
import ordersApi from "./orders.Router.js";
import shoppingCartApi from "./shoppingCart.Router.js";
import { routedNotImplemented } from "../middlewares/routes.Middlewares.js";


const router = express.Router();

router.use("", userApi);

router.use("/api/products", productsApi);

router.use("/api/orders", ordersApi);

router.use("/api/shoppingcartproducts", shoppingCartApi);

router.use(routedNotImplemented);

export default router;