module.exports = (sequelize, Sequelize) => {

  const Usuario = sequelize.define("user", {
    mail: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    name: Sequelize.STRING(150),
    role: {
      type: Sequelize.ENUM('ADMIN_ROLE', 'USER_ROLE'),
      allowNull: false,
      defaultValue: 'USER_ROLE',
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });

  return Usuario;
};