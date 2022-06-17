'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    static associate(models) {
      // define association here
      reserva.belongsTo(models.hotel, {
        foreignKey: 'idHotel'
      });
      reserva.belongsTo(models.cliente, {
        foreignKey: 'idCliente'
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