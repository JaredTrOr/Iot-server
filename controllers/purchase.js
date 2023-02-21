const Purchase = require('../schemas/Purchase');
const Candy = require('../schemas/Candy');

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
        const userPurchases = await Purchase.find({userId: id});
        res.json({success: true, userPurchases});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }
}

//Get the user amount of purchases
const getUserCandyPurchases = async (req,res) => {
    const arrayOfAmountsOfCandy = [];
    const {id} = req.params;

    try{
        //Get the total amount of purchases of the user
        const total = await Purchase.countDocuments({userId: id});

        //Get the amount per candy
        const candies = await Candy.find(); 
        for(const candy of candies){
            const candyId = candy._id.toString();
            const smallSize = await Purchase.countDocuments({userId: id, candyId, size: 'small'});
            const mediumSize = await Purchase.countDocuments({userId: id, candyId, size: 'medium'});
            const bigSize = await Purchase.countDocuments({userId: id, candyId, size: 'big'});
            arrayOfAmountsOfCandy.push(
                {
                    typeOfCandy: candy.name,
                    small: smallSize,
                    medium: mediumSize,
                    big: bigSize
                }
            );
        }
        res.json({success: true, totalAmount: total, candyPurchases: arrayOfAmountsOfCandy});
    }catch(err){    
        res.json({success: false, msg: `ERROR: ${err}`});
    }
};

//Create a purchase
const insertPurchase = async (req,res) => {
    const {candyId, size, userId} = req.body;
    const dateOfPurchase = dateFormat(); 
    const purchase = new Purchase({candyId, size, userId, dateOfPurchase});

    try{
        await purchase.save();
        res.json({success: true, msg: `Se ha hecho la compra exitosamente`});
    }catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}

const insertPurchaseWithMotor = async (candyId, size, userId) => {
    const dateOfPurchase = dateFormat(); 
    const purchase = new Purchase({candyId, size, userId, dateOfPurchase});

    try{
        await purchase.save();
        res.json({success: true, msg: `Se ha hecho la compra exitosamente`});
    }catch(err){
        res.json({success: false, msg:`ERROR: ${err}`});
    }
}

//Edit purchase
const editPurchase = async (req,res) => {
    try{
        await Purchase.findByIdAndUpdate(req.body.id,req.body);
        res.json({success: true, msg: `Compra actualizada exitosamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR ${err}`});
    }
}

const deletePurchase = async (req,res) => {
    const {id} = req.params;

    try{
        await Purchase.findByIdAndDelete(id);
        res.json({success: true, msg: `Compra eliminada exitasamente`});
    }catch(err){
        res.json({success: false, msg: `ERROR ${err}`});
    }
}

const dateFormat = () => {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${getDateTime}`;
}

const getDateTime = () => {
    const date = new Date();
    return date.getHours() +':'+ date.getMinutes()+':'+date.getSeconds();
}

module.exports = {
    insertPurchase,
    insertPurchaseWithMotor,
    editPurchase,
    deletePurchase,
    getPurchases,
    getUserPurchase,
    getTotalAmountOfPurchases,
    getUserCandyPurchases
}