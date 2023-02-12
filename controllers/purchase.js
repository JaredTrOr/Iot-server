const Purchase = require('../schemas/Purhase');

//Get all the purhcases
const getPurchases = async (req,res) => {
    try{
        const purchases = await Purchase.find();
        res.json({success: true, purchases});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//Get total purchases
const getTotalAmountOfPurchases = async (req,res) => {
    try{
        const amountOfPurchases = await Purchase.countDocuments();
        res.json({success: true, amountOfPurchases})
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//Get specific user purchases
const getUserPurchase = async (req,res) => {
    const {id} = req.params;
    try{
        const userPurchases = Purchase.find({_id: id});
        res.json({success: true, userPurchases});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

const getUserAmountOfPurchases = async (req,res) => {
    try{
        
    }catch(err){    
        res.json({success: false, msg: `ERROR: ${err}`});
    }
};

//Create a purchase
const insertPurchase = async (req,res) => {
    const {typeOfCandy, size, userId} = req.body;
    const purchase = new Purchase({typeOfCandy, size, userId});
    try{
        await purchase.save();
        res.json({success: true, msg: `Se ha hecho la compra exitosamente`, user});
    }catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }

}



module.exports = {
    insertPurchase,
    getPurchases,
    getUserPurchase,
    getTotalAmountOfPurchases
}