const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuration de la connexion à la base de données
const sequelize = new Sequelize('wayconnect_db', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

// Vérifier la connexion
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données MySQL réussie.');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données :', err);
    });

module.exports = sequelize;
