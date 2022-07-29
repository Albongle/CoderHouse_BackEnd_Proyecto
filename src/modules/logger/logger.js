import logger from "log4js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

logger.configure({
    appenders:{
        myLoggerConsol:{type:"console"},
        myLoggerWarn:{type:"file",filename:path.join(__dirname,"..","..","logs","Warn.log")},
        myLoggerError:{type:"file",filename:path.join(__dirname,"..","..","logs","Error.log")}

    },
    categories:{
      default:{appenders:["myLoggerConsol"], level:"info"},
      warn:{appenders:["myLoggerWarn"], level:"warn"},
      error:{appenders:["myLoggerError"], level:"error"},
    }
})




export default logger;



