require('dotenv').config() //  por convenio suele ir al principio
const morgan = require('morgan')
const express = require('express')
const api = express()
api.use(morgan('dev'))
const router = require('./api/routes')

api.use(express.json())
api.use('/api' ,router) //En este caso la ruta seria /api/books.... esto se hace por convenio
// err nos muestra el error que tenemos exactamente 
api.listen(process.env.PORT, (err) => {
    if (err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)
    console.log(`API connected to port ${process.env.PORT}!`)
})












