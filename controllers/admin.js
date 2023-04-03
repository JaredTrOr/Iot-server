const Admin = require('../schemas/Admin');
const User = require('../schemas/User');
const bcrypt = require('bcrypt');

//READ USERS
const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.json({success: true, users: users});
    }catch(err){
        res.json({success: false, msg: err});
    }
}

//READ ADMINS
const getAdmins = async (req,res) => {
    try{
        const admins = await Admin.find({_id: {$ne: req.params.id}});
        res.json({success: true, admins});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getAdminInformation = async (req,res) => {
    const {id} = req.params;
    try{
        const admin = await Admin.findById(id);
        res.json({success: true, admin});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getUserInformation = async (req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findById(id);
        res.json({success: true, user});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//CREATE ADMIN
const createAdmin = async (req,res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const admin = new Admin({
        name: req.body.name,
        username: req.body.username,
        password: encryptedPassword,
        email: req.body.email,
        address: {
            street: req.body.street,
            number: req.body.number,
            place: req.body.place //suburb
        }
    });

    try{
        await admin.save();
        //req.session.admin = user;
        res.json({success: true, msg: `Administrador creado exitosamente`, admin});
    }catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}

const loginAdmin = async (req,res) => {
    const {username, password} = req.body;

    try{
        const admin = await Admin.findOne({username});
        if(admin){
            try{
                if(await bcrypt.compare(password, admin.password)){
                    res.json({success: true, msg:`Administrador ingresado exitosamente`, admin});
                }
                else{
                    res.json({success: false, msg: `Contraseña incorrecta`});
                }
            }catch(err){
                res.json({success: false, msg: `ERROR: ${err}`});
            }
        }
        else{
            res.json({success: false, msg: `Usuario de administrador incorrecto`});
        }
    }catch(err){
        res.json({success: false, msg: err});
    }
}

//UPDATE ADMIN
const updateAdmin = async (req,res) => {
    try{
        await Admin.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: {
                street: req.body.street,
                number: req.body.number,
                place: req.body.place //suburb
            }
        });
        res.json({success: true, msg: `Administrador actualizado`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const changePassword = async (req,res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    try{
        await Admin.findByIdAndUpdate(req.body.id, {
            password: encryptedPassword
        });
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//DELETE ADMIN
const deleteAdmin = async (req,res) => {
    const {id} = req.params;
    try{
        await Admin.deleteOne({_id: id});
        res.json({success: true, msg: `Administrador eliminado exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

module.exports = {
    getUsers,
    getAdmins,
    getAdminInformation,
    getUserInformation,
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin,
    changePassword
}