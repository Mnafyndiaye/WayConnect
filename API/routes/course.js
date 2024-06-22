const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, async (req, res) => {
    try {
        const idConducteur = req.userId; // Supposons que l'ID de l'utilisateur soit attaché à la requête après l'authentification
        const { 
            title, 
            description, 
            depart, 
            destination, 
            heuredepart, 
            place_disponible, 
            prix } = req.body;


        const newCourse = await Course.create({
            title,
            description,
            depart,
            destination,
            heuredepart,
            place_disponible,
            prix,
            idConducteur
        });

        res.status(201).json({ message: 'Course créée avec succès', course: newCourse });
    } catch (error) {
        console.error('Erreur lors de la création de la course :', error);
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

router.get('/search', async (req, res) => {
    try {
        const { departure, destination, departureTime } = req.query;

        const courses = await Course.findAll({
            where: {
                departure,
                destination,
                departureTime
            }
        });

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
