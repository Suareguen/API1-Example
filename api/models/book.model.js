const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Book = sequelize.define('book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Book