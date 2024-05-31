// authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Vérifier si le JWT est présent dans l'en-tête de la requête
    const token = req.headers.authorization;
    if (!token) {
        // Si le JWT n'est pas présent, rediriger l'utilisateur vers la page de connexion
        return res.redirect('/login');
    }

    // Vérifier la validité du JWT
    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            // Si le JWT n'est pas valide, rediriger l'utilisateur vers la page de connexion
            return res.redirect('/login');
        }
        // Si le JWT est valide, passer à la prochaine étape du middleware
        next();
    });
};

module.exports = authMiddleware;
