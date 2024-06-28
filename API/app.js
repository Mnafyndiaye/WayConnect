const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
const bookingRoutes = require('./routes/booking');
const authMiddleware = require('./middlewares/authMiddleware');
const app = express();
require('dotenv').config();
require('./db');
const port = process.env.PORT ;


app.use(express.json());

// Utilisation des routes d'authentification
app.use('/auth', authRoutes);
app.use('/course', authMiddleware, courseRoutes);
app.use('/booking', authMiddleware, bookingRoutes);

// Synchronisation de Sequelize avec la base de données
// sequelize.sync()
//   .then(() => {
//     // Démarrage du serveur Express
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
