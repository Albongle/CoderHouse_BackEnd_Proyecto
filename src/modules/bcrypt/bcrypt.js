import bcrypt from "bcrypt";

function  isPasswordValid(password,encryptedPassword){
    return bcrypt.compareSync(password,encryptedPassword);
}

function encryptPassword(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10,null));
}

export { isPasswordValid, encryptPassword};