const express=require("express")
const express =require("dotenv")
const bodyParser = require("body-parser")
dotenv.config()
const port =process.env.port

const app=express()
app.use(express.json())


app.get('/todos',(req,res)=>{
    
})
app.post('/todo',(req,res)=>{

})
app.put('/completed',(req,res)=>{

})
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})