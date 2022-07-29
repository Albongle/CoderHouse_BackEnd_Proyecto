import { JsonWebToken } from "../modules/jwt/jsonWebToken.js";
import ShoppingCartService from "../service/shoppingCart.Service.js";


function isAuthenticated(req, res, next)
{ 
    const authorization = req.headers.authorization;
    if(authorization){
        const accessToken = authorization.split(" ")[1];
        JsonWebToken.validateAccessToken(accessToken,(error,decode)=>{
            if(!error){
                req.user = decode;
                next();
            }else{

                res.status(401).json({status:"error",code:401, message:`Acceso denegado`});
            }
        });
    }else{
        res.status(401).send({status:"error",code:401, message:`Acceso denegado`});
    }
}

function isUserAdmin(req, res, next) 
{
    const {user} = req;
    if(user && user.name === "admin")
    {
        next();
    }
    else
    {
        res.status(401).send({status:"error",code:401, message:`Sin permisos suficientes para acceder al endpoint`});
    }
}


function getCartFromUser (req, res, next)
{

    ShoppingCartService.getShoppingCart(req)
    .then(shoppingCart=>{
        req.shoppingCart = shoppingCart;
        next();
    })
    .catch(error=> res.status(500).send({status:"error", code:500, message:`error interno ${error}`}))

}

function createCartToUser (req, res, next)
{
    if(req.shoppingCart === null)
    {
        ShoppingCartService.createShoppingCart(req)
        .then(shoppingCart=>{
                req.shoppingCart = shoppingCart;
                next();
        })
        .catch(error=> res.status(500).send({status:"error", code:500, message:`error interno ${error}`}));
    }
    else
    {
        next();
    }

}


export default {isAuthenticated, isUserAdmin,getCartFromUser,createCartToUser };