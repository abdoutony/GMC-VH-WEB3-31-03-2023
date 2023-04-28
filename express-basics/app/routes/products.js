const express = require("express")
const router = express.Router()
module.exports = ()=>{
    router.get("/products",(req,res)=>{
        res.send("products list")
    })
    return router
}