const Admin = require('../schemas/Admin');
const User = require('../schemas/User');

//READ USERS
const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.json({success: true, users});
    }catch(err){
        res.json({success: false, msg: err});
    }
}

//READ ADMINS
const getAdmins = async (req,res) => {
    try{
        const admins = await Admin.find();
        res.json({success: true, admins});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getAdminInformation = async (req,res) => {
    const {id} = req.params;
    try{
        const admin = Admin.findById(id);
        res.json({success: true, msg: `ERROR: ${err}`});
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
            place: req.body.location //suburb
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

//UPDATE ADMIN
const updateAdmin = async (req,res) => {
    try{
        await Admin.findByIdAndUpdate(req.body.id, req.body);
        res.json({success: true, msg: `Administrador actualizado`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//DELETE ADMIN
const deleteAdmin = async (req,res) => {
    const {id} = req.params;
    try{
        Admin.deleteOne({_id: id});
        res.json({success: true, msg: `Administrador eliminado exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

module.exports = {
    getUsers,
    getAdmins,
    getAdminInformation,
    createAdmin,
    updateAdmin,
    deleteAdmin
}