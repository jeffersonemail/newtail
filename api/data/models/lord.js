'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lord = sequelize.define('Lord', {
    nome: DataTypes.STRING,
    temporadas: {
      type: DataTypes.STRING,
      get() {
        return JSON.parse(this.getDataValue('temporadas'));
      },
      set(value) {
        this.setDataValue('temporadas', JSON.stringify(value));
      }
    }
  }, {
    updatedAt: false,
    createdAt: false
  });
  Lord.associate = function(models) {
    Lord.hasOne(models.Casa)
  };
  return Lord;
};