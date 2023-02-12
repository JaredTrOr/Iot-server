const Candy = require('../schemas/Candy');

const createCandy = async (req,res) => {
    const {nameOfCandy} = req.body;
    const candy = new Candy({nameOfCandy});

    try{
        await candy.save();
        res.json({success: true, msg: `Dulce creado exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const editCandy = async (req,res) => {

}

module.exports = {
    nameOfCandy
}