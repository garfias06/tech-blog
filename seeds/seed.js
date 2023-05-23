const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Seeding Post db
const seedPost = async (users) => {
  await Post.bulkCreate(postData);
}

// Seeding comment db
const seedComment = async (users) => {
  await Comment.bulkCreate(commentData);
}

// Seeding database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await seedPost();
  await seedComment();

  process.exit(0);
};

seedDatabase();
