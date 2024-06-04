const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Course = require('../models/course');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/reserve', authMiddleware, async (req, res) => {
    try {
        const { courseId, seatsBooked } = req.body;
        const userId = req.userId; // ID de l'utilisateur obtenu après authentification

        // Vérifier si la course existe et s'il y a assez de sièges disponibles
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course non trouvée' });
        }
        if (course.seatsAvailable < seatsBooked) {
            return res.status(400).json({ message: 'Pas assez de sièges disponibles' });
        }

        // Créer la réservation
        const booking = await Booking.create({
            userId,
            courseId,
            seatsBooked
        });

        // Mettre à jour le nombre de sièges disponibles
        course.seatsAvailable -= seatsBooked;
        await course.save();

        res.status(201).json({ message: 'Réservation réussie', booking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
