const router = require('express').Router();

//Purchase controllers
const {
    getPurchases,
    getUserPurchase,
    getTotalAmountOfPurchases,
    getUserCandyPurchases,
    getUserAmountOfPurchases,
    insertPurchase,
    editPurchase,
    deletePurchase
} = require('../../controllers/purchase');

//Routes
router.get('/getPurchases', getPurchases);
router.get('/getUserPurchase/:id', getUserPurchase);
router.get('/getUserAmountOfPurchases/:id', getUserAmountOfPurchases);
router.get('/getTotalAmountOfPurchases', getTotalAmountOfPurchases);
router.get('/getUserCandyPurchases/:id', getUserCandyPurchases);
router.post('/insertPurchase', insertPurchase);
router.put('/editPurchase', editPurchase);
router.delete('/deletePurchase/:id', deletePurchase);

module.exports = router;