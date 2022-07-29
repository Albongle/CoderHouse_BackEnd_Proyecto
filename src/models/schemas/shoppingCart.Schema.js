import mongoose from "mongoose"

const ShoppingCartSchema = mongoose.Schema({
    id:{type:String, required:true, unique:true},
    idUser:{type:String, required:true, unique:true},
    products: {type:Array, required:true}
});


const modelo = mongoose.model("shoppingcart",ShoppingCartSchema);
export default modelo;