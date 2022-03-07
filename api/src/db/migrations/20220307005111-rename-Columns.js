'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("jogos", "timeA", "casa");
  },

  async down (queryInterface) {
    await queryInterface.removeColumn("timeA");
  }
};
