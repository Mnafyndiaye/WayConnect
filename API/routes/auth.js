const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const router = express.Router()

//route d'inscription
router.post('/inscription', async (req, res) => {
    try {
        const { nom, prenom, email, telephone, Mdp, userType } = req.body;

        // Validation des données d'entrée
        if (!nom || !prenom || !email || !telephone || !Mdp || !userType) {
            return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(Mdp, 10);

        // Création d'un nouvel utilisateur dans la base de données
        const newUser = await User.create({
            nom,
            prenom,
            email,
            telephone,
            Mdp: hashedPassword,
            userType
        });

        // Génération du token JWT
        const token = jwt.sign({ userId: newUser.idUser }, process.env.JWT_SECRET_KEY);

        // Réponse réussie avec le token
        res.status(201).json({ message: 'Utilisateur enregistré avec succès !', token });
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
});
// Route de connexion
router.post('/connexion', async (req, res) => {
    try {
        const { email, Mdp } = req.body;

        // Validation des données d'entrée
        if (!email || !Mdp) {
            return res.status(400).json({ error: 'Email et mot de passe sont requis' });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await bcrypt.compare(Mdp, user.Mdp);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        // Génération du token JWT
        const token = jwt.sign({ userId: user.idUser }, process.env.JWT_SECRET_KEY);

        // Réponse réussie
        res.status(200).json({ message: 'Connexion réussie !', token });
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
});

module.exports = router;