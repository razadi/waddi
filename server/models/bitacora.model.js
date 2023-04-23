module.exports = (sequelize, Sequelize) => {

  const Bitacora = sequelize.define('bitacora', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    action: Sequelize.STRING(25),
  });

  return Bitacora;
};