const Sequelize = require('sequelize')

module.exports = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    post_content: {
        type: Sequelize.TEXT
    },
    post_date: {
        type: Sequelize.DATE
    },
    post_type: {
        type: Sequelize.STRING
    },
    post_from: {
        type: Sequelize.STRING
    },
    post_filiere: {
        type: Sequelize.INTEGER
    },
    post_departement: {
        type: Sequelize.INTEGER
    },
    post_module: {
        type: Sequelize.INTEGER
    },
    post_classe: {
        type: Sequelize.INTEGER
    }
})