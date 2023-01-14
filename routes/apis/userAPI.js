const router = require('express').Router();

//User controllers
const {
    getStatistics,
    login,
    register,
    updateUser,
    deleteUser,
    logout
} = require('../../controllers/user');

//MiddleWares
const isRegistered = require('../../middlewares/isRegistered');
const isLogin = require('../../middlewares/isLogin');

router.get('/statistics', getStatistics);
router.post('/login', isLogin,login);
router.post('/register',isRegistered, register);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.delete('/logout', logout);

module.exports = router;