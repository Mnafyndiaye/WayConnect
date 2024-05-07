const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define( 'user', {
    nom: { DataTypes.STRING, allowNull: false, unique: true},
    prenom : { DataTypes.STRING, }
});