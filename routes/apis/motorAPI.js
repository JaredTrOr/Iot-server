const router = require('express').Router();
const {moveMotor} = require('../../controllers/motor');

router.post('/', moveMotor);

module.exports = router;