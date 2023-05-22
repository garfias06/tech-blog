const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedPost = async (users) => {
  await Post.bulkCreate(postData);
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
}

const seedComment = async (users) => {
  await Comment.bulkCreate(commentData);
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
}

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await seedPost(users);
  await seedComment(users);

  process.exit(0);
};

seedDatabase();