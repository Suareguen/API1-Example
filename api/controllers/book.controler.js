const Book = require('../models/book.model.js')

const listBooks = (req, res) => {
        //res.send('API Ok')
        res.status(200).json('Books Ok')// Si todo va bien
}


const createBooks = async (req, res) => {

        try {
                const book = await Book.create(req.body)
                res.status(200).json(book)
        } catch (err) {
                throw new Error(err)
                res.status(500).json({
                        msg: 'ERROR creating User',
                        err: err
                })
        }
}


module.exports = {
    listBooks,
    createBooks
}