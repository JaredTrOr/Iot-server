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

//Motor operations
router.post('/motor', motorOperation);

//User operations
router.get('/user/statistics', getStatistics);
router.post('/user/login', login);
router.post('/user/register', register);
router.put('/user/update', updateUser);
router.delete('/user/delete', deleteUser);
router.delete('/user/logout', logout);

module.exports = router;