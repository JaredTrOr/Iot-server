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

router.get('/statistics', getStatistics);
router.post('/login', login);
router.post('/register',isRegistered, register);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);
router.delete('/logout', logout);

module.exports = router;