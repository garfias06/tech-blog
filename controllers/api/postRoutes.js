const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../helpers/withAuth');

// Creating a new Post, withAuth will let do this action if user Logged in
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Updating existing Post, withAuth will let do this action if user Logged in
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                }
            });
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Deleting existing Post, withAuth will let do this action if user Logged in
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!deletePost) {
            res.status(404).json({ message: 'No Post Found' });
            return;
        }
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;