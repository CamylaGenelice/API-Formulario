import controller from '../controller/user.controller.js'

import express from 'express'

const route = express.Router()

route.get('/pegar',controller.getAllUsers)

route.post('/create',controller.create)

route.patch('/update',controller.updateEmail)

route.delete('/',controller.deleteUser)

route.get('/pegaruser',controller.getUser)

export default route