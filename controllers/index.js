const router = require('express').Router();

// Importing Route modules
const apiRoutes=require('./api');
// const homeRoutes=require('./homeRoutes');

router.use('/user', apiRoutes);
// router.use('/', homeRoutes);

module.exports=router;