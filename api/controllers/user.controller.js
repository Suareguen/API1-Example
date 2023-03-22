
const listUsers = () => {
    (req, res) => {
        res.send('API Ok')
        res.status(200).json('Users Ok')
    }
}


const createUser = () => {
    (req, res) => {
        res.status(200).json(req.body)
        console.log('Book Added!')
    }
}

module.exports = {
    listUsers, 
    createUser
}