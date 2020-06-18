const Sequelize = require('sequelize')

module.exports = sequelize.define("etudiant",{
     id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     nom : {
        type :Sequelize.STRING
     },
     prenom : {
        type :Sequelize.STRING
     }
})