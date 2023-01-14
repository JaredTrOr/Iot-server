const User = require('../schemas/User');
const bcrypt = require('bcrypt');

const getUserInformation = () => {

}

const getStatistics = () => {

}

const register = async (req,res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: encryptedPassword,
        email: req.body.email,
        administrator: req.body.admin
    })

    try{
        await user.save();
        req.session.user = user;
        res.json({success: true, msg: `User registered`});
    }catch(err){
        res.json({success: false, msg:err});
    }
}

const login = async (req,res) => {
    //Validation: ¿Passport or normal?
    //Sessions?
}

const logout = () => {

}

const deleteUser = () => {

}

const updateUser = () => {

}

module.exports = {
    getStatistics,
    getUserInformation,
    register,
    login,
    logout,
    deleteUser,
    updateUser
}