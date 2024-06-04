const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('Utilisateurs', {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Mdp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userType: {
        type: DataTypes.ENUM('conducteur', 'passager'),
        allowNull: false
    }
},
    {
        timestamps: false // Cette option ajoutera createdAt et updatedAt
});

module.exports = User;