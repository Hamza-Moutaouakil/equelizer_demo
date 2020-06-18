const Sequelize = require('sequelize')

module.exports = sequelize.define("compte", {

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    id_user: {
        type: Sequelize.INTEGER
    }
})