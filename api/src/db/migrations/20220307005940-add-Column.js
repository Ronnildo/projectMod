"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("jogos", "created_at", {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn("jogos", "updated_at", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(['created_at', "updated_at"]);
  },
};
