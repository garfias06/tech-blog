const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedPost = async (users) => {
  await Post.bulkCreate(postData);
}

const seedComment = async (users) => {
  await Comment.bulkCreate(commentData);
}

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
