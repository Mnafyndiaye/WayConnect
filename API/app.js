const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res) => {
    res.send('Bienvenu dans notre API')
})

app.use(bodyParser.json());
const port = 3000

app.listen(port, () => {
    console.log('Le server demarre sur le port ${port}')
})