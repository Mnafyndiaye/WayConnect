const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Bienvenu dans notre API')
})

const port = 3000

app.listen(port, () => {
    console.log('Le server demarre sur le port ${port}')
})