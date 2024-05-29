const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const { Types } = require('mysql');

const User = sequelize.define( 'user', {
    nom: { Types: DataTypes.STRING, allowNull: false},
    prenom : { Types: DataTypes.STRING, allowNull: false},
    email : { Types: DataTypes.STRING, allowNull : false, unique: true},
    telephone : { Types: DataTypes.INTEGER, allowNull: false, unique: true},
    mdp : { Types: DataTypes.STRING, allowNull: false},
    userType : { Types: DataTypes.ENUM('conducteur', 'passager'), allowNull: false}
});

module.exports = User