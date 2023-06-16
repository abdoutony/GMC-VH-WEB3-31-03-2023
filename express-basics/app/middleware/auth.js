isAuth= true
function checkAuth(req,res,next){
    if(isAuth){
      next()
    }else{
      res.status(403).send("Unauthorized")
    }
  }

module.exports = {checkAuth}