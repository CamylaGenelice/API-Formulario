
import cors from 'cors'
import express from 'express'
import 'bootstrap'
import route from './meu-projeto/back-end/routes/user.route.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/users',route)

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor rodando')
})