import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    id:{type:String, required:true, unique:true},
    name: {type:String, required:true},
    lastname: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true},
    phone: {type:String, required:true},
    image: {type:String, required:true}
});


const modelo = mongoose.model("user",UserSchema);
export default modelo;