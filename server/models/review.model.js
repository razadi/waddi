module.exports = (sequelize, Sequelize) => {

  const Review = sequelize.define('review', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  });

  return Review;
};