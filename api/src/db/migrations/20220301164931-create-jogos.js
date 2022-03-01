'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('jogos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            timeA: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            timeB: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            horario: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            local: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('jogos');
    }
};