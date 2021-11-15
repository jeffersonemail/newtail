'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lord = sequelize.define('Lord', {
    nome: DataTypes.STRING,
    casaId: DataTypes.INTEGER
  }, {});
  Lord.associate = function(models) {
    Lord.belongsTo(models.Casa, {foreignKey: 'casaId', as: 'casa'})
    Lord.belongsToMany(models.Temporada, {through: 'LordsTemporadas', foreignKey: 'lordId', as: 'temporadas'})
  };
  return Lord;
};