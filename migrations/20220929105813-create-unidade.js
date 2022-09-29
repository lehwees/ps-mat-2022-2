'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('unidade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      sede_regional: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      nivel: {
        allowNull: false,
        type: Sequelize.TINYINT,
        defaultValue:1
      },
      data_abertura: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('unidade');
  }
};