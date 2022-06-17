'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {

    static associate(models) {
      // define association here
      this.hasMany(models.reserva,{
        foreignKey:'idCliente'
      });
    }
  }
  cliente.init({
    clientName: DataTypes.STRING,
    dni: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};