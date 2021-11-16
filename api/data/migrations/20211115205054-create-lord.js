'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      temporadas: {
        type: Sequelize.STRING,
        allowNull: true
      }
    }, {
      createdAt: false,
      updatedAt: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lords');
  }
};