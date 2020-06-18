const Sequelize = require('sequelize')

module.exports = sequelize.define("comment", {
    comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    comment_content: {
        type: Sequelize.STRING
    },
    comment_date: {
        type: Sequelize.DATE
    },
    poster_id: {
        type: Sequelize.INTEGER
    },
    post_id: {
        type: Sequelize.INTEGER
    }
})