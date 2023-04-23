module.exports = (sequelize, Sequelize) => {

  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: Sequelize.TEXT,
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
  });

  return Post;

}