const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router()

router.post('/inscription', async(res, req) => {
    try{
        const {nom, prenom, email, telephone, mdp} = req.body
        const 
    }
})