'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      home_team_id: { type: Sequelize.INTEGER },
      home_team_goals: { type: Sequelize.INTEGER },
      away_team_id: { type: Sequelize.INTEGER },
      away_team_goals: { type: Sequelize.INTEGER },
      in_progress: { type: Sequelize.BOOLEAN }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
