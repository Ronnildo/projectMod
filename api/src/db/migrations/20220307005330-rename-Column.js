'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("jogos", "timeB", "fora");
  },

  async down (queryInterface) {
    await queryInterface.removeColumn("timeB");
  }
};
