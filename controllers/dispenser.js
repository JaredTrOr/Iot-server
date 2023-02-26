const Dispenser = require('../schemas/Dispenser');

const getDispenserCandies = async (req,res) => {
    try{
        const candies = await Dispenser.find();
        res.json({success: true, msg: 'Operación exitosa', candies});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getDispenserCandyByPosition = async (req,res) => {
    const {position} = req.params;

    try{
        const candy = await Dispenser.findOne({position: position});
        res.json({success: true, msg: 'Operacion exitosa', candy});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getDispenserCandyById = async (req,res) => {
    const {id} = req.params;

    try{
        const candy = Dispenser.findById(id);
        res.json({success: true, msg: 'Operacion exitosa', candy});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const createDispenserCandy = async (req,res) => {
    const {position, candy_name, amount} = req.body;
    const dispenser = new Dispenser({position, candy_name, amount});
    try{
       await dispenser.save();
       res.json({success: true, msg: 'Dulce insertado', dispenser});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const editDispenserCandies = async (req,res) => {
    const {position, candyName} = req.body;

    try{
        await Dispenser.updateOne({position: position}, {$set: {'candy_name': candyName}});
        res.json({success: true, msg: 'Operación hecha exitosamente'});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const removeDispenserCandy = async (req,res) => {
    const {id} = req.params;
    try{
        await Dispenser.deleteOne({_id: id});
        res.json({success: true, msg: `Dulce eliminado exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

module.exports = {
    getDispenserCandies,
    getDispenserCandyByPosition,
    getDispenserCandyById,
    createDispenserCandy,
    editDispenserCandies,
    removeDispenserCandy
}