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

//READ INFORMATION
const getStatistics = () => {

}

//CREATE
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

//VALIDATE
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

//UPDATE
const updateUser = async (req,res) => {
    const {_id,name,username, email} = req.body;
    try{
        await User.updateOne({id: _id}, {$set: {name, username, email}});
        res.json({success: true, msg: `User updated`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//DELETE
const deleteUser = async (req,res) => {
    const {_id} = req.params;
    try{
        await User.deleteOne({_id})
        res.json({success: true, msg: `User deleted`});
    }
    catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}


module.exports = {
    getUserInformation,
    getStatistics,
    register,
    login,
    updateUser,
    deleteUser,
    logout
}