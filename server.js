const express=require("express");
const morgan=require("morgan");
const mongoose=require("mongoose");
const path=require("path");
const app=express();
const PORT=process.env.PORT || 8080;
const Item=require('./model/item');


app.use(morgan('tiny'));

mongoose.connect("mongodb+srv://kumar-21:arunkumar21@cluster0.byqno.mongodb.net/react?retryWrites=true&w=majority", 
{useNewUrlParser: true,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log('connected to cluster')
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// const data={
//     title:"welcome to React Page",
//     content:"A react page using MongoDB cluster"
// }
// const newdata=new Item(data);
// newdata.save();










app.get("/api",(req,res)=>{
    Item.find({ })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
  console.log(error)
    })
     res.json(data);
  });
  app.get("/api/name",(req,res)=>{
      const data={
          name:"kumar",
          age:18
      };
      res.json(data);
  
  });
  app.post("/save",(req,res)=>{

    const data=req.body;
    const newItem=new Item(data);
    newItem.save((error)=>{
        if(error){
            res.status(500).json({msg:"sorry Internal server Error"});
            return;
        }
        return  res.json({msg:"received"});
    });
   

});


app.listen(PORT,console.log("server started on 8080"));
