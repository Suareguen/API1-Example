const router = require('express').Router()
const { listBooks, createBooks } = require('../controllers/book.controler')


router.get('', listBooks)


router.post('', createBooks)


module.exports = router