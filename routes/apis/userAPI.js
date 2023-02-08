const router = require('express').Router();

//User controllers
const {
    login,
    register,
    updateUser,
    deleteUser,
    getUserInformation
} = require('../../controllers/user');

//MiddleWares
const isRegistered = require('../../middlewares/isRegistered');
const isLogin = require('../../middlewares/isLogin');
const {checkUserUpdate} = require('../../middlewares/checkUpdate');

router.get('/:id', getUserInformation);             //Read user
router.post('/register',isRegistered, register);    //Create
router.post('/login', isLogin,login);               //Validate
router.put('/update',checkUserUpdate, updateUser);  //Update
router.delete('/delete/:id', deleteUser);           //Delete


module.exports = router;