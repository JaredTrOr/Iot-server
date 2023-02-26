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
router.get('/getDispenserCandyByPosition/:position', getDispenserCandyByPosition);
router.get('/getDispenserCandyById/:id', getDispenserCandyById);
router.post('/createDispenserCandy', createDispenserCandy);
router.put('/editDispenserCandies', editDispenserCandies);
router.delete('/removeDispenserCandy', removeDispenserCandy);

module.exports = router;