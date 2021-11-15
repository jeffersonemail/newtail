'use strict';
module.exports = (sequelize, DataTypes) => {
  const LordsTemporadas = sequelize.define('LordsTemporadas', {
    lordId: DataTypes.INTEGER,
    temporadaId: DataTypes.INTEGER
  }, {});
  LordsTemporadas.associate = function(models) {
    LordsTemporadas.belongsTo(models.Lord, {foreignKey: 'lordId'})
    LordsTemporadas.belongsTo(models.Temporadas, {foreignKey: 'temporadaId'})
  };
  return LordsTemporadas;
};