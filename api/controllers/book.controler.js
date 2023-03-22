
const listBooks = () => {
    (req, res) => {
        res.send('API Ok')
        res.status(200).json('Books Ok')// Si todo va bien
    }
}


const createBooks = () => {
    (req, res) => {
        res.status(200).json(req.body)
        console.log('Book Added!')
    }
}


module.exports = {
    listBooks,
    createBooks
}