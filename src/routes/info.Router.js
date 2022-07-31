import express  from "express";
import InfoController from "../controllers/info.Controller.js";




const router = express.Router();


router.get("",InfoController.getInfoOfSystem);




export default router;