const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');


// One to Many relationship
Post.belongsTo(User,{foreignKey:'user_id'});
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

// One to Many relationship 
Comment.belongsTo(User,{foreignKey:'user_id'});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

// Pending review
// One to Many relationship
Comment.belongsTo(Post, {foreignKey:'post_id'});
Post.hasMany(Comment, {foreignKey:'post_id', onDelete: 'CASCADE'
})

module.exports = { Post, Comment, User};
