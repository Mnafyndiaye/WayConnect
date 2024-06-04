const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Course = require('./course');
const User = require('./user');

const Booking = sequelize.define('booking', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    seatsBooked: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Booking;
