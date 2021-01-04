const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

const salasRouter = require('./routes/salas/salas')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/salas', salasRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
