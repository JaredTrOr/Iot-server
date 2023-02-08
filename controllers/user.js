const User = require('../schemas/User');
const bcrypt = require('bcrypt');

//READ INFORMATION
const getUserInformation = async (req,res) => {
    const {id} = req.params;

    try{
        const user = await User.findById(id);
        res.json({success: true, user});
    }
    catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
    
}

//CREATE
const register = async (req,res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: encryptedPassword,
        email: req.body.email,
    });

    try{
        await user.save();
        //req.session.user = user;
        res.json({success: true, msg: `Usuario registrado exitosamente`, user});
    }catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}

//VALIDATE
const login = async (req,res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({username});
        console.log(user);
        if(user){
            try{
                if(await bcrypt.compare(password, user.password)){
                    res.json({success: true, msg:`Usuario ingresado exitosamente`, user});
                }
                else{
                    res.json({success: false, msg: `Contraseña incorrecta`});
                }
            }catch(err){
                res.json({success: false, msg: `ERROR: ${err}`});
            }
        }
        else{
            res.json({success: false, msg: `Usuario incorrecto`});
        }
    }catch(err){
        res.json({success: false, msg: err});
    }
    
}

//UPDATE
const updateUser = async (req,res) => {
    try{
        await User.findByIdAndUpdate(req.body.id, req.body);
        res.json({success: true, msg: `Usuario actualizado`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//DELETE
const deleteUser = async (req,res) => {
    const {id} = req.params;
    try{
        await User.deleteOne({_id: id})
        res.json({success: true, msg: `Usuario eliminado exitosamente`});
    }
    catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}


module.exports = {
    getUserInformation,
    register,
    login,
    updateUser,
    deleteUser,
}