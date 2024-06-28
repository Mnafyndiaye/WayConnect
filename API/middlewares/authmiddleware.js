const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Accès refusé. Aucun token fourni.' });
    }

    const token = authHeader.split(' ')[1]; // Assuming the format is "Bearer <token>"

    if (!token) {
        return res.status(402).json({ error: 'Accès refusé. Aucun token fourni.' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY, "", async(err, decoded)=> {
            if (err) {
                console.log(err)
                return res.status(403).json({ error: 'Accès refusé. Token invalide'})
            }
            req.userId = decoded.userId
            next()
        })
        
    } catch (error) {
        res.status(400).json({ error: 'Token invalide.?' });
    }
};

module.exports = authMiddleware;
