const isLogin = async (req,res,next) => {
   const {username, password} = req.body;
    if(username && password){
        next();
    }   
    else{
        res.json({success: false, msg: `Empty field sent`});
    }    
}

module.exports = isLogin;