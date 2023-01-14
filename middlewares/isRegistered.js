const User = require('../schemas/User');

const isRegistered = async (req,res,next) => {
    const {name, username, password, email, administrator} = req.body;

    if(name && username && password && email && administrator){
        const user = await User.find({username});
        if(!user){
            const email = await User.find({email});
            if(!email){
                next();
            }
            else{
                res.json({success:false, msgs:'Email ya registrado'});
            }
        }
        else{
            res.json({success: false, msg: 'Usuario ya registrado'});
        }        
    }
    else{
        res.json({success: false, msg: `Empty field sent`});
    }
}

module.exports = isRegistered;