const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');

// One to Many relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
Post.belongsTo(User,{foreignKey:'user_id'});

// One to Many relationship 
User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
Comment.belongsTo(User,{foreignKey:'user_id'});


module.exports = { Post, Comment, User};
