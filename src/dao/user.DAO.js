import ManagerMongoDb from "../database/managerMongoDb.js";
import UserModel from "../models/schemas/user.Schema.js"

class UserDAO extends ManagerMongoDb{
    constructor()
    {
        super(UserModel);
    }
}

export default UserDAO;