import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.get('/hola', (req, res) => {
    res.json({ msg: 'hola mundo con json nuevo' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})