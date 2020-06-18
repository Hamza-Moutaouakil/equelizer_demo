const Sequelize = require('sequelize')

module.exports = sequelize.define("module",{
    id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nom : {
        type :Sequelize.STRING
    },
    id_filiere : {
        type :Sequelize.INTEGER
    },
    id_semestre : {
        type :Sequelize.INTEGER
    }
})