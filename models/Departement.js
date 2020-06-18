const Sequelize = require('sequelize')

module.exports = sequelize.define("departement",{
     id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     nom : {
        type :Sequelize.STRING
     },
     chef_dep : {
        type :Sequelize.INTEGER
     },
     description :{
        type :Sequelize.STRING
     }
})