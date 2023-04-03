const router = require('express').Router();

//Admin controllers
const {
    getUsers,
    getAdmins,
    getAdminInformation,
    getUserInformation,
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin,
    changePassword,
} = require('../../controllers/admin');

//Middlewares
const {isAdminCreated} = require('../../middlewares/isRegistered');

//Operations
router.get('/getUsers', getUsers); 
router.get('/getAdmins/:id', getAdmins);
router.get('/getUserInformation/:id', getUserInformation);
router.get('/getAdminInformation/:id', getAdminInformation);
router.post('/createAdmin',isAdminCreated, createAdmin);
router.post('/loginAdmin', loginAdmin);
router.put('/updateAdmin', updateAdmin);
router.put('/changePassword', changePassword);
router.delete('/deleteAdmin/:id', deleteAdmin);

module.exports = router;