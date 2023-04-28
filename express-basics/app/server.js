const express = require("express")
const app = express()
const apiRoutes = require("./routes/index")
require("dotenv").config()
const PORT = process.env.PORT

app.get("/hello",(req,res)=>{
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