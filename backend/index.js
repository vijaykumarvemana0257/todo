const express=require("express")
const dotenv =require("dotenv")
const bodyParser = require("body-parser")
const { createTodo, updateTodo } = require("./types")
const connectDB=require('./db')
const cors=require('cors')
const { todo } = require("./models/todoSchema")
dotenv.config()
const port =process.env.PORT

const app=express()
app.use(express.json())
app.use(cors());

connectDB();

app.get('/todos',async (req,res)=>{
    
    const todos=await todo.find({})
    res.status(200).json({todos})

})
app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({message:"You have snet the wrong inputs"})
        return ;
    }
    

   try{ 
    const newTodo=await todo.create({
        title:createPayload.title,
        description:createPayload.description,
    })

    res.json({msg:"Todo created",
                todo:newTodo})}
                catch(error){
                    res.status(500).json({ message: "Internal Server Error", error: error.message });
                }

})
app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload){
        res.status(411).json({message:"You have snet the wrong inputs"})
        return ;
    }
   
    await todo.update({
        _id:updatePayload.id
    },{
        isCompleted:true
    })

    res.status(201).json({mesagae:"Updated"})


})
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})