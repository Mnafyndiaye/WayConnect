const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router()

router.post('/inscription', async (req, res) => {
    try {
        console.log('Contenu de req.body :', req.body);

        const { nom, prenom, email, telephone, Mdp, userType } = req.body;
        const hashedPassword = await bcrypt.hash(Mdp, 10);

        const newUser = await User.create({
            nom,
            prenom,
            email,
            telephone,
            Mdp: hashedPassword,
            userType
        });

        const secretKey = 'bGZD9TxgtPV6$#C#pXV#J#R#4bZ&H^p%W'; // Remplacez par votre clé secrète

        const token = jwt.sign({ userId: newUser.idUser }, secretKey);
        res.status(201).json({ message: 'Utilisateur enregistré avec succès !', token });
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({ error: error.message });
    }
});
// Route de connexion
router.post('/connexion', async (req, res) => {
    try {
        const { email, Mdp } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await bcrypt.compare(Mdp, user.Mdp);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        }

        const secretKey = 'bGZD9TxgtPV6$#C#pXV#J#R#4bZ&H^p%W'; // Utilisez la même clé secrète que pour l'inscription

        const token = jwt.sign({ userId: user.idUser }, secretKey);
        res.status(200).json({ message: 'Connexion réussie !', token });
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;