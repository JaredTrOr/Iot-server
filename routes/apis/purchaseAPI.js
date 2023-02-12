const router = require('express').Router();

//Purchase controllers
const {
    getPurchases,
    getUserPurchase,
    getTotalAmountOfPurchases,
    insertPurchase,
} = require('../../controllers/purchase');

//Routes
router.get('/getPurchases', getPurchases);
router.get('/getUserPurchase', getUserPurchase);
router.get('/getTotalAmountOfPurchases', getTotalAmountOfPurchases);
router.post('/insertPurchase', insertPurchase);

module.exports = router;