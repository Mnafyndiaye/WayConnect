const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router()

router.post('/inscription', async(res, req) => {
    try{
        const {nom, prenom, email, telephone, mdp} = req.body
        const hashedPassword = await bcrypt.hash(mdp, 10);
        await User.create({ email, mdp:hashedPassword, nom, prenom, telephone });
        res.status(201).json({ message: 'Utilisateur enregistré avec succès !' });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
})

router.post('/connexion', async(res, req) => {
    try{
        const {email, mdp} = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) return res.status(400).json({ message: "Identifiant incorrect." });

        const validPassword = await bcrypt.compare(mdp, user.password)
        if(!validPassword) return res.status(400).json({ message: "Identifiant incorrect." })  

    }catch(error){

    }
})