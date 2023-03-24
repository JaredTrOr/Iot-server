const router = require('express').Router();

//User controllers
const {
    login,
    register,
    updateUser,
    deleteUser,
    getUserInformation,
    getUserFavoriteCandy,
    setFavoriteCandy
} = require('../../controllers/user');

//MiddleWares
const {isRegistered} = require('../../middlewares/isRegistered');
const isLogin = require('../../middlewares/isLogin');
//const {checkUserUpdate} = require('../../middlewares/checkUpdate');

//Operations
router.get('/:id', getUserInformation);             //Read user
router.get('/favoriteCandy/:id', getUserFavoriteCandy);
router.get('/setFavoriteCandy/:id', setFavoriteCandy); //THIS WILL CHANGE TO THE PUT METHOD
router.post('/register',isRegistered, register);    //Create
router.post('/login', isLogin,login);               //Validate
router.put('/update', updateUser);  //Update
router.delete('/delete/:id', deleteUser);           //Delete


module.exports = router;