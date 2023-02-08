const User = require('../schemas/User');
const Admin = require('../schemas/Admin');

const checkUserUpdate = async (req,res,next) => {
    const {id,username, email} = req.body;

    if(!await User.findOne({username})){
        if(!await User.findOne({email})){
            if(!await User.findById(id)) next();
            else res.json({sucess: false, msg: 'User not found'});
        }
        else{
            res.json({sucess: false, msg: 'Email already exists'});
        }
    }
    else{
        res.json({sucess: false, msg: 'Username already exists'});
    }
}

const checkAdminUpdate = async (req,res,next) => {
    const {id} = req.body;
    if(await Admin.findById(id)) next();
    else res.json({sucess: true, msg: 'Administrator not found'});
}

module.exports = {
    checkUserUpdate,
    checkAdminUpdate
}