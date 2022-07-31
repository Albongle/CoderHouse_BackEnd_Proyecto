import {engine} from "express-handlebars";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handlebars = engine({
    extname: ".hbs",
    defaultLayout:"layout",
    layoutsDir: path.join(__dirname,"..","..","views","layouts"),
    partialsDir: path.join(__dirname,"..","..","views","partials"),
});


export default handlebars;