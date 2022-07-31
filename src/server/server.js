import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiRouter from "../routes/index.Router.js";
import { PORT } from "../config/config.js";
import logs from "../modules/logger/logger.js";
import connectDb from "../database/connect.js"
import path from "path";
import { fileURLToPath } from 'url';
import handlebars from "../modules/handlebars/handlebars.js";
import {Server as socketio} from "socket.io";
import ChatDAO from "../dao/chat.DAO.js";



const corsOptions = { origin: "*"};
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.engine("hbs",handlebars);
app.set("views",path.join(__dirname,"..","views"));
app.set("view engine", "hbs");


app.use(express.static(path.join(__dirname,"..", "public")));
app.use("/",apiRouter);





const server = app.listen(PORT,()=>logs.getLogger().info(`app listenings ons ports ${PORT}`));
const io = new socketio(server);

connectDb();


const ManagerChat = new ChatDAO()
io.on("connection",(socket)=>{
    logs.getLogger().info("Usuario conectado con ID", socket.id); 

    socket.on("chat:tiping",(data)=>{
        socket.broadcast.emit("chat:tiping", data);
    });

    socket.on("new:message",async (data)=>{
        io.sockets.emit("new:message", data);

        ManagerChat.addElements(data)
        .then(()=> ManagerChat.getAllElements()
        .then(message=> logger.getLogger().info(`nuevo mensaje recibido ${message}`)))
        .catch(error=> logs.getLogger("error").error(error)); 
    });
});
app.io = io;







function shutDown() {
    logs.getLogger().info("Received kill signal, shutting down gracefully");
    server.close(() => {
        logs.getLogger().info("Closed out remaining connections");
        process.exit(0);
    });
  
    setTimeout(() => {
        logs.getLogger("error").error(
        "Could not close connections in time, forcefully shutting down"
      );
      process.exit(1);
    }, 10000);
}
  
process.on("SIGINT", shutDown);
process.on("uncaughtException", shutDown);
process.on("SIGTERM", shutDown);