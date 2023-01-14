const User = require('../schemas/User');

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