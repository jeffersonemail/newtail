'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temporada = sequelize.define('Temporada', {
    nome: DataTypes.STRING
  }, {});
  Temporada.associate = function(models) {
    Temporada.belongsToMany(models.Lord, {through: 'LordsTemporadas', foreignKey: 'temporadaId', as: 'lords'})
  };
  return Temporada;
};