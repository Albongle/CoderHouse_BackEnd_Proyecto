import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//configuro multer

function configStorage(folder,picName) {
    return multer.diskStorage({
        destination:function(_req,_file,cb){
            cb(null,path.join(__dirname,"..","..", "public","images",folder));
        }, 
        filename: function(_req,file,cb){
            cb(null,`${picName}_${Date.now()}${path.extname(file.originalname)}`);
        }
    });
}
const uploadUsers = new multer({storage: configStorage("users","PictureUser")});
const uploadProducts = new multer({storage: configStorage("products","PictureProduct")});


export {uploadUsers, uploadProducts };