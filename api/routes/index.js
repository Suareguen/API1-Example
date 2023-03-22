const router = require('express').Router()
const bookRouter = require('./book.router')
const userRouter = require('./user.router')


router.use('/books', bookRouter)//son los enrutadores que nos mandan a los user.router y book.router y 
router.use('/users', userRouter)


module.exports = router