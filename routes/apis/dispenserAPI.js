const router = require('express').Router();

const {
    getDispenserCandies,
    getDispenserCandyByPosition,
    getDispenserCandyById,
    createDispenserCandy,
    editDispenserCandies,
    removeDispenserCandy
} = require('../../controllers/dispenser');

router.get('/getDispenserCandies', getDispenserCandies);
router.get('/getDispenserCandyByPosition', getDispenserCandyByPosition);
router.get('/getDispenserCandyById', getDispenserCandyById);
router.post('/createDispenserCandy', createDispenserCandy);
router.put('/editDispenserCandies', editDispenserCandies);
router.delete('/removeDispenserCandy', removeDispenserCandy);

module.exports = router;