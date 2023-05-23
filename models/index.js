const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// One to Many relationship
Post.belongsTo(User, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE' 
});

// One to Many relationship 
Comment.belongsTo(User, { 
  foreignKey: 'user_id'
});

// Pending review
// One to Many relationship

Post.hasMany(Comment, {
  foreignKey: 'post_id', 
  onDelete: 'CASCADE'
})

module.exports = { Post, Comment, User };
