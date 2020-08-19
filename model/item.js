const mongoose=require('mongoose');
const Schema=mongoose.Schema
const itemSchema=new Schema({
    title:String,
    content:String,
    date:{
        type:String,default:Date.now()
        }
        
})
const Item=mongoose.model("Item",itemSchema)
module.exports=Item;