'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
    return queryInterface.removeColumn('Users', 'gender', {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * return queryInterface.dropTable('users');
     */
  }
};
