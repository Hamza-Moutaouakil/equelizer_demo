const Sequelize = require('sequelize')

module.exports = sequelize.define("notification",{
     id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     notification_type : {
        type :Sequelize.INTEGER
     },
     notification_content : {
        type :Sequelize.STRING
     },
     notification_from :{
        type :Sequelize.STRING
     },
     notification_to : {
        type :Sequelize.INTEGER
     },
     notification_date :{
        type :Sequelize.DATE
     }
})