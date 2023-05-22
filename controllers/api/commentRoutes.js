const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../helpers/withAuth');

// Getting Post by id


// Creating a new comment
router.post('/:id',withAuth,async(req,res)=>{
    try {
        if(req.params.id){
            const newComment=await Comment.create({
                ...req.body,
                user_id:req.params.user_id,
                });
                res.status(200).json(newComment);
        }
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports=router;