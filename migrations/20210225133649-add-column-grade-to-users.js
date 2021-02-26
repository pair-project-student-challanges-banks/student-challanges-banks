'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
     return queryInterface.addColumn('Users', 'grade', {
        type: Sequelize.STRING 
     });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
     return queryInterface.removeColumn('Users', 'grade')
  }
};
