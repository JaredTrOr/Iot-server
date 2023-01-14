const router = require('express').Router();

//Admin controllers
const {
    getUsers
} = require('../../controllers/admin');

//Admin operations
router.get('/getUsers', getUsers);

module.exports = router;