const User = require('../schemas/User');
const Candy = require('../schemas/Candy');
const Purchase = require('../schemas/Purchase');
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

const getUserFavoriteCandy = async (req,res) => {
    const {id} = req.params;

    try{
        const user = await User.findById(id);
        res.json({success: true, 'favorite_candy': user.favorite_candy});
    }
    catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const setFavoriteCandy = async (req,res) => {
    const arrayOfAmountsOfCandy = [];
    const {id} = req.params;

    let favoriteCandy;

    try{
        //Get the amount per candy
        const candies =  await Candy.find(); 
        for(const candy of candies){
            const amountOfCandy = await Purchase.countDocuments({$and: [{userId: id}, {candyName: candy.name}]});
            arrayOfAmountsOfCandy.push({
                nameOfCandy: candy.name,
                amount: amountOfCandy
            });
        }

        res.json({success: true, arrayOfAmountsOfCandy});

    }catch(err){
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
    
    const updatedUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
    };

    try{
        await User.findByIdAndUpdate(req.body.id, updatedUser);
        res.json({success: true, msg: `Usuario actualizado`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//DELETE
const deleteUser = async (req,res) => {
    const {id} = req.params;
    try{
        await User.findByIdAndDelete(id);
        res.json({success: true, msg: `Usuario eliminado exitosamente`});
    }
    catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}

const changePassword = async (req,res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    try{
        await User.findByIdAndUpdate(req.body.id, {
            password: encryptedPassword
        });
        res.json({success: true, msg: `Se cambio la contraseña exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

module.exports = {
    getUserInformation,
    getUserFavoriteCandy,
    setFavoriteCandy,
    register,
    login,
    updateUser,
    changePassword,
    deleteUser,
}