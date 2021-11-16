'use strict';
module.exports = (sequelize, DataTypes) => {
  const Casa = sequelize.define('Casa', {
    nome: DataTypes.STRING,
    regiao: DataTypes.STRING,
    anoDeFundacao: DataTypes.INTEGER
  }, {
    updatedAt: false,
    createdAt: false
  });
  Casa.associate = function(models) {
    Casa.belongsTo(models.Lord)
  };
  return Casa;
};