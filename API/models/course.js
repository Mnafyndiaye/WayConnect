const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./Users');

const Course = sequelize.define('Course', {
    idCourse: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    depart: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    heureDepart: { type: DataTypes.DATE, allowNull: false },
    siegeDisponible: { type: DataTypes.INTEGER, allowNull: false },
    prix: { type: DataTypes.FLOAT, allowNull: false },
    idConducteur: { type: DataTypes.INTEGER, references: { model: User, key: 'idUser' }, allowNull: false },
    etat: { type: DataTypes.ENUM('En attente', 'En cour', 'Terminée'), allowNull: false, defaultValue: 'En attente' } // Adding etat column
});

User.hasMany(Course, { foreignKey: 'idConducteur' });
Course.belongsTo(User, { foreignKey: 'idConducteur' });

module.exports = Course;
