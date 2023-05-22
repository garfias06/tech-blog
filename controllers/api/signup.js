const router=require('express').Router();
const {User}=require('../../models');

router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
  
        res.status(200).json(newUser);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports=router;
