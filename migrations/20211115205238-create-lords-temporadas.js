'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LordsTemporadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lordId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lords',
          key: 'id'
        }
      },
      temporadaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Temporadas',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LordsTemporadas');
  }
};