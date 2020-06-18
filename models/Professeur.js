const Sequelize = require('sequelize')

module.exports = sequelize.define("professeur",{
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
     },
     id_dep :{
        type :Sequelize.STRING
     },
     date_naissance : {
        type :Sequelize.STRING
     },
     sexe : {
        type :Sequelize.STRING
     },
     specialite : {
        type :Sequelize.STRING
     },
     email : {
        type :Sequelize.STRING
     }
})