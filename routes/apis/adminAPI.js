const router = require('express').Router();

//Admin controllers
const {
    getUsers
} = require('../../controllers/admin');


router.get('/getUsers', getUsers); //Read all the users


module.exports = router;