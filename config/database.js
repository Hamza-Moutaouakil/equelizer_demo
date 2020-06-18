const Sequelize = require('sequelize')

const sequelize = new Sequelize("mystudents2", "root", "root",
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorAliases: 0

    })
sequelize.authenticate()


module.exports = sequelize;

global.sequelize = sequelize;