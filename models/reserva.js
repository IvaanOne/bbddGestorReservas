'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    static associate(models) {
      // define association here
      movie.belongsTo(models.hotel, {
        foreignKey: 'hotelName'
      });
      movie.belongsTo(models.cliente, {
        foreignKey: 'id'
      });
    }
  }
  reserva.init({
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
    importe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};