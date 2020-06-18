const Sequelize = require('sequelize')

module.exports = sequelize.define("eleve",{
     id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     id_classe: {
         type: Sequelize.INTEGER
     },
     nom : {
        type :Sequelize.STRING
     },
     prenom : {
        type :Sequelize.STRING
     },
     date_naissance : {
        type :Sequelize.STRING
     },
     sexe : {
        type :Sequelize.STRING
     },
     email : {
        type :Sequelize.STRING
     },
     token : {
        type :Sequelize.STRING
     }
})