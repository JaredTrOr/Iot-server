const router = require('express').Router();
const motorRouter = require('./apis/motorAPI');
const userRouter = require('./apis/userAPI');
const adminRouter = require('./apis/adminAPI');
const purchaseRouter = require('./apis/purchaseAPI');
const candyRouter = require('./apis/candyAPI');
const dispenserRouter = require('./apis/dispenserAPI');

router.get('/', (req,res) => res.json({Welcome: 'Welcome to my raspcandy server'}));
router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/purchase', purchaseRouter);
router.use('/candy', candyRouter);
router.use('/motor', motorRouter);
router.use('/dispenser', dispenserRouter);

module.exports = router;