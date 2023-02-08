const User = require('../schemas/User');

const isRegistered = async (req,res,next) => {
    const {name, username, password, email, administrator} = req.body;

    if(name && username && password && email){
        const userUsername = await User.findOne({username});
        if(!userUsername){
            const userEmail = await User.findOne({email});
            if(!userEmail){
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