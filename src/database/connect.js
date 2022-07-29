import mongoose from "mongoose";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USER, NODE_ENV } from "../config/config.js";
import logs from "../modules/logger/logger.js";

function setConnection() 
{
    connect();
    mongoose.connection.on("disconnected",connect);
}

async function connect() 
{
    try {

        if(NODE_ENV === "production")
        {
            await mongoose.connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`);
        }
        else
        {
            await mongoose.connect(`mongodb://localhost:${DATABASE_PORT}/${DATABASE_NAME}`);
        }
        return logs.getLogger().info(`Successfully connected to db ${NODE_ENV}`);
    } catch (error) {

        logs.getLogger("error").error(`Error connecting to database :`, error);
        return process.exit(1);
    }
}


export default setConnection;