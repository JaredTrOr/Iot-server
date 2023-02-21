const User = require('../schemas/User');
const Admin = require('../schemas/Admin');

const isRegistered = async (req,res,next) => {
    const {name, username, password, email} = req.body;

    if(name && username && password && email){
        const userUsername = await User.findOne({username});
        if(!userUsername){
            const userEmail = await User.findOne({email});
            if(!userEmail){
                next();
            }
            else{
                res.json({success:false, msg:'Email ya registrado'});
            }
        }
        else{
            res.json({success: false, msg: 'Usuario ya registrado'});
        }        
    }
    else{
        res.json({success: false, msg: `Algun campo vacío enviado`});
    }
}

const isAdminCreated = async (req,res,next) => {
    const {username, email} = req.body;

    const adminUsername = await Admin.findOne({username});
    if(!adminUsername){
        const adminEmail = await Admin.findOne({email});
        if(!adminEmail){
            next();
        }
        else{
            res.json({success:false, msgs:'Email de administrador ya registrado'});
        }
    }
    else{
        res.json({success: false, msg: 'Administrador ya registrado'});
    }
}

module.exports = {isRegistered, isAdminCreated};