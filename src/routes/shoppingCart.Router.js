import express  from "express";
import ShoppingCartController from "../controllers/shoppingCart.Controller.js";
import middleware from "../middlewares/user.Middlewares.js";

const router = express.Router();

router.post("",middleware.isAuthenticated,middleware.getCartFromUser,middleware.createCartToUser,ShoppingCartController.addOneProductToCart);

router.get("",middleware.isAuthenticated,middleware.getCartFromUser, ShoppingCartController.getAllProductsFromCart);

router.delete("/:id",middleware.isAuthenticated,middleware.getCartFromUser, ShoppingCartController.deleteOneProductFromCart);


export default router;