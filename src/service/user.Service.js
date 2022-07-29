import UserDAO from "../dao/user.DAO.js";
import UserMapper from "../mappers/user.Mapper.js";
import logs from "../modules//logger/logger.js"
import { isPasswordValid } from "../modules/bcrypt/bcrypt.js";
import { JsonWebToken } from "../modules/jwt/jsonWebToken.js";
const ManagerUser = new UserDAO(); 
class UserService{

    static async addUser(user)
    {
        try 
        {

            const userBuissinesObject = UserMapper.getBussinesObject(user);
            const userDataTransferObject = UserMapper.getDataTransferObject(userBuissinesObject);
            const response = await ManagerUser.addElements(UserMapper.getDataTransferObjectWhitPassword(userBuissinesObject));

            return response ? {status: "ok", message:"register ok", code:201, data:{accesToken:JsonWebToken.generateAccessToken(userDataTransferObject),user:userDataTransferObject}} : {status: "atencion", code:200, message:"usuario existente"};
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al agregar un usuario ${error.message}`);
        }
    }

    static async loginUser({email,password})
    {
        try 
        {
            const user = (await ManagerUser.getAllElements()).find(u=> u.email === email);
            if(user && isPasswordValid(password, user.password))
            {
                const userDataTransferObject = UserMapper.getDataTransferObject(user);
                return {status: "ok", message:"login ok",code:200, data:{accesToken:JsonWebToken.generateAccessToken(userDataTransferObject),user:userDataTransferObject}};

            }
            else
            {
                return {status: "ok",code:401, message:"acceso denegado"};
            }
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al loguear un usuario ${error.message}`);
        }
    }

    static async addImageToUser(file,user)
    {
        try 
        {
            if(file)
            {
                const userFind = await ManagerUser.getOneElementByFilter({email:user.email});

                userFind.image = `\\images\\users\\${file.filename}`;
                await ManagerUser.updateElementsById(userFind.id,userFind);
                return {status: "ok", message:"imagen cargada con exito",code:200, user:UserMapper.getDataTransferObject(userFind)};
            }
            else
            {
                return {status:"atencion", code:204, message:"no se recibio la imagen necesaria"};
            }

            
        } 
        catch (error) 
        {
            logs.getLogger("error").error(error);
            throw new Error(`Error al cargar la imagen de un usuario ${error.message}`);
            
        }
    }
}   

export default UserService;