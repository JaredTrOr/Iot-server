const router = require('express').Router();
const {motorOperation} = require('../../controllers/motor');

router.post('/', motorOperation);

module.exports = router;