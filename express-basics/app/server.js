const express = require("express")
const app = express()
const apiRoutes = require("./routes/index")
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
app.listen(4000,()=>console.log("Server started"))