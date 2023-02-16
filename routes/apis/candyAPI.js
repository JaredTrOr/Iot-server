const router = require('express').Router();

const {
    getCandies,
    getAmountOfCandies,
    createCandy,
    editCandy,
    deleteCandy
} = require('../../controllers/candy');

router.get('/getCandies', getCandies);
router.get('/getAmountOfCandies', getAmountOfCandies);
router.post('/createCandy', createCandy);
router.put('/editCandy', editCandy);
router.delete('/deleteCandy/:id', deleteCandy);


module.exports = router;