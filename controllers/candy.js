const Candy = require('../schemas/Candy');

const getCandies = async (req,res) => {
    try{
        const candies = await Candy.find();
        res.json({succes: true, candies});
    }catch(err){
        res.json({success: false, msg: `ERROR ${err}`});
    }
}

const getAmountOfCandies = async (req,res) => {
    try{
        const amountOfCandies = await Candy.countDocuments();
        res.json({succes: true, amountOfCandies});
    }catch(err){
        res.json({succes: false, msg: `ERROR ${err}`});
    }
}

const createCandy = async (req,res) => {
    const {name} = req.body;
    const candy = new Candy({name});

    try{
        await candy.save();
        res.json({success: true, msg: `Dulce creado exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const editCandy = async (req,res) => {
    try{
        await Candy.findByIdAndUpdate(req.body.id, req.body);
        res.json({success: true, msg: `Dulce actualizado correctamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const deleteCandy = async (req,res) => {
    const {id} = req.params;
    try{
        await Candy.findByIdAndRemove(id);
        res.json({succes: true, msg: `Dulce eliminado correctamente`});
    }catch(err){
        res.json({succes: false, msg: `ERROR: ${err}`});
    }
}

module.exports = {
    getCandies,
    getAmountOfCandies,
    createCandy,
    editCandy,
    deleteCandy
}