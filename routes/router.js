const router = require('express').Router();

//Motor controllers
const {motorOperation} = require('../controllers/motor');
//User controllers
const {
    getStatistics,
    login,
    register,
    updateUser,
    deleteUser,
    logout
} = require('../controllers/user');
//Admin controllers
const {
    getUsers
} = require('../controllers/admin')
//MiddleWares
const isRegistered = require('../middlewares/isRegistered');
const isLogin = require('');

//Motor operations
router.post('/motor', motorOperation);

//User operations
router.get('/user/statistics', getStatistics);
router.post('/user/login', login);
router.post('/user/register',isRegistered, register);
router.put('/user/update', updateUser);
router.delete('/user/delete', deleteUser);
router.delete('/user/logout', logout);

//Admin operations
router.get('/admin/getUsers', getUsers);

module.exports = router;