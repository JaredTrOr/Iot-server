const router = require('express').Router();

//Admin controllers
const {
    getUsers,
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminInformation,
} = require('../../controllers/admin');

//Middlewares
const {isAdminCreated} = require('../../middlewares/isRegistered');

//Operations
router.get('/:id', getAdminInformation);
router.get('/getAdmins', getAdmins);
router.get('/getUsers', getUsers); 
router.post('/createAdmin',isAdminCreated, createAdmin);
router.put('/updateAdmin', updateAdmin);
router.delete('/deleteAdmin', deleteAdmin);

module.exports = router;