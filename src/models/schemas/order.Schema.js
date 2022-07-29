import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    id:{type:String, required:true, unique:true},
    datetime:{type:Date, required:true},
    shoppingCart:{type:Object, required:true},
});


const modelo = mongoose.model("order",OrderSchema);
export default modelo;