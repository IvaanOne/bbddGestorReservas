'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {

    static associate(models) {
      // define association here
      this.hasMany(models.reserva,{
        foreignKey:'id'
      });
    }
  }
  hotel.init({
    hotelName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};