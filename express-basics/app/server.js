const express = require("express")
const app = express()
const apiRoutes = require("./routes/index")
require("dotenv").config()
const {checkAuth} = require("./middleware/auth")
const PORT = process.env.PORT

function sayHello (req,res,next){
  console.log("Hello world")
  next()
}
app.use(sayHello)



app.get("/hello",checkAuth,(req,res)=>{
  res.send("Hello from my first express app")
})

app.get("/",(req,res)=>{
    
    res.send("ROOT ")
})

app.use(apiRoutes())


app.get("*",(req,res)=>{
    res.send("bad route")
})
app.listen(PORT,()=>console.log("Server started on port " + PORT))