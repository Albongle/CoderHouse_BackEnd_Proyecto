import jwt from "jsonwebtoken";
import { SECRET_WORD } from "../../config/config.js";
export class JsonWebToken{

    static generateAccessToken = (user)=> jwt.sign(user,SECRET_WORD, {expiresIn:"60m"});

    static validateAccessToken = (accessToken,callback)=>jwt.verify(accessToken,SECRET_WORD,callback);

    static decodeAccessToken = (accessToken)=> jwt.decode(accessToken,{complete:true});
}