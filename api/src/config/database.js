require('dotenv').config();

module.exports = {
    username: "postgres",
    password: "123456",
    database: "projectBd",
    host: "172.17.0.3",
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}