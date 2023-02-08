const Admin = require('../schemas/Admin');
const User = require('../schemas/User');

//READ INFORMATION
const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.json({success: true, users});
    }catch(err){
        res.json({success: false, msg: err});
    }
}


module.exports = {
    getUsers
}