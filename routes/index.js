const router = require('express').Router();

const apiRoutes = require('./api');

// router.use('/thought', thoughtRoutes);
router.use('./api', apiRoutes);

module.exports = router;