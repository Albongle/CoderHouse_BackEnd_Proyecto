import express  from "express";
import UserController from "../controllers/user.Controller.js";
import middleware from "../middlewares/user.Middlewares.js";
import {uploadUsers} from "../modules/multer/multer.js";



const router = express.Router();


router.post("/login", UserController.loginUser);

router.post("/registro", UserController.registerUser);

router.put("/user/uploadimage", middleware.isAuthenticated, uploadUsers.single("image"), UserController.uploadImage);

export default router;