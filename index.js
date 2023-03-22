require('dotenv').config() //  por convenio suele ir al principio
const morgan = require('morgan')
const express = require('express')
const api = express()
const sequelize = require('./api/db')




api.use(morgan('dev'))
api.use(express.json())
const router = require('./api/routes')
api.use('/api' ,router) //En este caso la ruta seria /api/books.... esto se hace por convenio
// err nos muestra el error que tenemos exactamente 
api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)
    console.log(`API connected to port ${process.env.PORT}!`)
    try {
        await sequelize.authenticate() // Es una promesa por eso hay que hacer la callback fucntion asincrona
        await sequelize.sync({ alter: true })//Este lo quitanos y lo pasamos al modelo
    } catch(err) {
        throw new Error('No se pudo conectar ala base de datos', err)
    }
})












