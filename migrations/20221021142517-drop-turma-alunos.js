'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.removeColumn(
      'alunos', // Nome da tabela
      'turma'
     )
  },

  async down (queryInterface, Sequelize) {''
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.addColumn(
      'alunos', // nome da tabela
      'turma',  // nome do novo campo
      {
        type: Sequelize.CHAR(5)
      }
     )
  }
};
