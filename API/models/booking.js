const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Course = require('./course');
const User = require('./Users');

const Booking = sequelize.define('reservations', {
    idReservation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    placeDispo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    passager_idPassager: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    course_idcourse: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'idCourse'
        }
    },
    etat: { 
        type: DataTypes.ENUM('Accepté', 'Refusé', 'En attente'), 
        allowNull: false, 
        defaultValue: 'En attente' 
    }
},{
    timestamps: false // Cette option ajoutera createdAt et updatedAt
});

module.exports = Booking;
