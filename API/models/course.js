const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Course = sequelize.define('course', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    departure: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    departureTime: { type: DataTypes.DATE, allowNull: false },
    seatsAvailable: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    driverId: { type: DataTypes.INTEGER, allowNull: false } // Référence au conducteur
});

module.exports = Course;
