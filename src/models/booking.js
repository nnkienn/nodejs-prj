'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ tại đây nếu cần thiết
    }
  }
  Booking.init({
    statusId: DataTypes.STRING,
    doctorId: DataTypes.INTEGER, // Chú ý: Chính tả "INTEGER" chính xác
    patientId: DataTypes.INTEGER, // Chú ý: Chính tả "INTEGER" chính xác
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
