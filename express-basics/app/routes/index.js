const express = require("express")
const router = express.Router()
const userRoutes = require("./users")
const productRoutes = require("./products")
module.exports = ()=>{
   router.use(userRoutes())
   router.use(productRoutes())
    return router
}