const router = require('express').Router();

// Importing Route modules
const apiRoutes=require('./api');
const homeRoutes=require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports=router;