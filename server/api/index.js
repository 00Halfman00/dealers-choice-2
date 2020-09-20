const router = require('express').Router();
router.use('/fellows', require('./fellows'));

module.exports = router;
