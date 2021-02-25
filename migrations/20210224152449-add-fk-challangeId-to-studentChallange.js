'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
    return queryInterface.addColumn('StudentChallanges', 'ChallangesId', {
      type: Sequelize.INTEGER,
      references: {
        model: "Challanges",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
    return queryInterface.removeColumn('StudentChallanges', 'ChallangesId');
  }
};
