const express = require("express")
const router = express.Router()
module.exports = ()=>{
    router.get("/users",(req,res)=>{
        res.send("Users list")
    })
    return router
}