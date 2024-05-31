const express = require('express')
const bodyParser = require('body-parser')
const Course = require('../models/course');
const Course = require('../models/Users');
const app = express()


app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use(bodyParser.json());
const port = 3000

app.listen(port, () => {
    console.log('Le server demarre sur le port ${port}')
})