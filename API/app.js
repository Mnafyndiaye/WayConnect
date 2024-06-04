const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const sequelize = require('./db');
const app = express();
const port = 3000;

// Middleware pour analyser les corps de requête JSON
app.use(express.json());

// Utilisation des routes d'authentification
app.use('/auth', authRoutes);

// Synchronisation de Sequelize avec la base de données
sequelize.sync()
  .then(() => {
    // Démarrage du serveur Express
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
