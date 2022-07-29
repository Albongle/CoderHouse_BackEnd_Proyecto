import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiRouter from "../routes/index.Router.js";
import { PORT } from "../config/config.js";
import logs from "../modules/logger/logger.js";
import connectDb from "../database/connect.js"
import path from "path";
import { fileURLToPath } from 'url';


const corsOptions = { origin: "*"};
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname,"..", "public")));
app.use("/",apiRouter);






const server = app.listen(PORT,()=>logs.getLogger().info(`app listenings ons ports ${PORT}`));

connectDb();


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