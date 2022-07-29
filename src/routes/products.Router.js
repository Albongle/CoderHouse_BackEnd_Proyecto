import express  from "express";
import ProductsController from "../controllers/products.Controller.js";
import middleware from "../middlewares/user.Middlewares.js";
import {uploadProducts} from "../modules/multer/multer.js";
const router = express.Router();

router.get("", ProductsController.getAllProducts);

router.post("", middleware.isAuthenticated, middleware.isUserAdmin, ProductsController.addOneProduct);

router.get("/:id", middleware.isAuthenticated, middleware.isUserAdmin, ProductsController.getOneProduct);

router.put("/:id",middleware.isAuthenticated, middleware.isUserAdmin, ProductsController.updateOneProduct);

router.delete("/:id", middleware.isAuthenticated, middleware.isUserAdmin, ProductsController.deleteOneProduct);

router.put("/uploadimage/:id", middleware.isAuthenticated, uploadProducts.single("image"), ProductsController.uploadImage);




export default router;