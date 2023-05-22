// Exporting route files
const router = require('express').Router();
const signUpRoute=require('./signup');
const loginRoute=require('./login');
const logoutRoute=require('./logout');
const postRoute=require('./postRoutes');
const commentRoute=require('./commentRoutes');

// Setting up paths
router.use('/signup', signUpRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/post', postRoute);
router.use('/comment', commentRoute);

module.exports=router;