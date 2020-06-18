const Sequelize = require('sequelize')

module.exports = sequelize.define("classe", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    num_eleves: {
        type: Sequelize.INTEGER
    },
    id_filiere: {
        type: Sequelize.INTEGER
    },
    année: {
        type: Sequelize.INTEGER
    },
    current_sem: {
        type: Sequelize.INTEGER
    },
    année_commence: {
        type: Sequelize.INTEGER
    }
})