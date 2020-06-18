const Sequelize = require('sequelize')

module.exports = sequelize.define("filiere",{
     id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     id_dep : {
        type :Sequelize.INTEGER
     },
     nom : {
        type :Sequelize.STRING
     },
     abbr :{
        type :Sequelize.STRING
     },
     chef_filiere : {
        type :Sequelize.INTEGER
     }
})