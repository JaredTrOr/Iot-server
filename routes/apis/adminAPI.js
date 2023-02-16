const router = require('express').Router();

//Admin controllers
const {
    getUsers,
    getAdmins,
    getAdminInformation,
    getUserInformation,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require('../../controllers/admin');

//Middlewares
const {isAdminCreated} = require('../../middlewares/isRegistered');

//Operations
router.get('/getUsers', getUsers); 
router.get('/getAdmins', getAdmins);
router.get('/getUserInformation/:id', getUserInformation);
router.get('/getAdminInformation/:id', getAdminInformation);
router.post('/createAdmin',isAdminCreated, createAdmin);
router.put('/updateAdmin', updateAdmin);
router.delete('/deleteAdmin/:id', deleteAdmin);

module.exports = router;