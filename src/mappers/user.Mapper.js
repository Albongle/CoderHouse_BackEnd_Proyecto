import UserBussines from "../models/bussines/user.Bussines.js";

class UserMapper{

    static getDataTransferObject(bussinesObject)
    {
        return{
            id:bussinesObject.id,
            name:bussinesObject.name,
            lastname:bussinesObject.lastname,
            email:bussinesObject.email,
            phone:bussinesObject.phone,
            image:bussinesObject.image,
        };
    }

    static getBussinesObject(dataTransferObject)
    {
        return new UserBussines(dataTransferObject);
    }

    static getDataTransferObjectWhitPassword(bussinesObject)
    {
        return{
            id:bussinesObject.id,
            name:bussinesObject.name,
            lastname:bussinesObject.lastname,
            email:bussinesObject.email,
            password:bussinesObject.password,
            phone:bussinesObject.phone,
            image:bussinesObject.image,
        };
    }

}

export default UserMapper;