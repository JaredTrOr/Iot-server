const User = require('../schemas/User');
const bcrypt = require('bcrypt');

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
        //req.session.user = user;
        res.json({success: true, msg: `User registered`, user});
    }catch(err){
        res.json({success: false, msg:err});
    }
}

const login = async (req,res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({username});
        console.log(user);
        if(user){
            try{
                if(await bcrypt.compare(password, user.password)){
                    res.json({success: true, msg:`User logged in`, user});
                }
                else{
                    res.json({success: false, msg: `Incorrect password`});
                }
            }catch(err){
                res.json({success: false, msg: err});
            }
        }
        else{
            res.json({success: false, msg: `Incorrect username`});
        }
    }catch(err){
        res.json({success: false, msg: err});
    }
    
}

const deleteUser = async (req,res) => {
    const {_id} = req.params;
    try{
        await User.deleteOne({_id})
        res.json({success: true, msg: `User deleted`});
    }
    catch(err){
        res.json({success: false, msg:err});
    }
}

const updateUser = () => {
    const {name,username, password, email, administrator} = req.body;
}

const getUserInformation = () => {

}

const getStatistics = () => {

}

module.exports = {
    getStatistics,
    getUserInformation,
    register,
    login,
    deleteUser,
    updateUser
}