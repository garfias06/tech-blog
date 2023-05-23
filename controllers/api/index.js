// Exporting route files
const router = require('express').Router();
const userRoutes =  require('./userRoutes')
const postRoute=require('./postRoutes');
const commentRoute=require('./commentRoutes');

// Setting up paths
router.use('/users', userRoutes);
router.use('/posts', postRoute);
router.use('/comments', commentRoute);

module.exports=router;