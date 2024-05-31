const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const authMiddleware = require('../middlewares/authmiddleware');

router.post('/create', authMiddleware, async (req, res) => {
    try {
        const { title, description, departure, destination, departureTime, seatsAvailable, price } = req.body;
        const driverId = req.userId; // Supposons que l'ID de l'utilisateur soit attaché à la requête après l'authentification

        const newCourse = await Course.create({
            title,
            description,
            departure,
            destination,
            departureTime,
            seatsAvailable,
            price,
            driverId
        });

        res.status(201).json({ message: 'Course créée avec succès', course: newCourse });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete/:id', authMiddleware, async (req, res) => {
    try {
        const courseId = req.params.id;
        const driverId = req.userId; // Supposons que l'ID de l'utilisateur soit attaché à la requête après l'authentification

        // Vérifier si la course existe et si l'utilisateur est le conducteur
        const course = await Course.findOne({ where: { id: courseId, driverId } });
        if (!course) {
            return res.status(404).json({ message: 'Course non trouvée ou vous n\'êtes pas autorisé à la supprimer' });
        }

        await course.destroy();
        res.status(200).json({ message: 'Course supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
