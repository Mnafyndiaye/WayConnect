const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Course = sequelize.define('course', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    departure: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    departureTime: { type: DataTypes.DATE, allowNull: false },
    seatsAvailable: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    driverId: { type: DataTypes.INTEGER, allowNull: false } // Référence au conducteur
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

module.exports = Course;
