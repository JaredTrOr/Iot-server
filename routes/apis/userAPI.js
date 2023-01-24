const router = require('express').Router();

//User controllers
const {
    getStatistics,
    login,
    register,
    updateUser,
    deleteUser,
    getUserInformation
} = require('../../controllers/user');

//MiddleWares
const isRegistered = require('../../middlewares/isRegistered');
const isLogin = require('../../middlewares/isLogin');

router.get('/:id', getUserInformation);          //Read user
router.get('/statistics', getStatistics);        //Read operations

router.post('/register',isRegistered, register); //Create
router.post('/login', isLogin,login);            //Validate
router.put('/update', updateUser);           //Update
router.delete('/delete/:id', deleteUser);        //Delete


module.exports = router;