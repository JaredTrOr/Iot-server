const router = require('express').Router();
const motorRouter = require('./apis/motorAPI');
const userRouter = require('./apis/userAPI');
const adminRouter = require('./apis/adminAPI');

router.use('/motor', motorRouter);
router.use('/user', userRouter);
router.use('/admin', adminRouter)

module.exports = router;