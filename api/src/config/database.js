require('dotenv').config();

const { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USERNAME } = process.env;

module.exports = {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: "projectBd",
    host: DATABASE_HOST,
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}