'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Casas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      regiao: {
        type: Sequelize.STRING
      },
      anoDeFundacao: {
        type: Sequelize.INTEGER
      },
      lordId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Lords'
          },
          key: 'id'
        }          
      }
    }, {
      createdAt: false,
      updatedAt: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Casas');
  }
};