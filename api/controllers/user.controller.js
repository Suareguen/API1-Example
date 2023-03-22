const User= require('../models/user.model')
const listUsers = (req, res) => {
        res.status(200).json('Users Ok')
}


const createUser = async (req, res) => {
        try {
                const user = await User.create(req.body)
                res.status(200).json(user)
        } catch(err) {
                throw new Error(err)
                res.status(500).json({
                        msg:'ERROR creating User',
                        err: err
                })
        }
}

module.exports = {
    listUsers, 
    createUser
}