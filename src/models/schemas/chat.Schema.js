import mongoose from "mongoose"

const ChatSchema = mongoose.Schema({
    name:{type:String, require:true, max:50}, 
    user:{type:String, require:true, max:50}, 
    message:{type:String, require:true}
});


const modelo = mongoose.model("chat",ChatSchema);
export default modelo;