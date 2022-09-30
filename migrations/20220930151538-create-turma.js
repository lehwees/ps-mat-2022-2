'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curso_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
          key: 'id'
        },
        allowNull: false
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professores',
          key: 'id'
        },
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      dia_semana: {
        type: Sequelize.TINYINT,
        min: 1,  // domingo
        max: 7,   // sabado
        allowNull: false
      },
      horario_ini: {
        type: Sequelize.TIME,
        allowNull: false
      },
      horario_fim: {
        type: Sequelize.TIME,
        allowNull: false
      },
      data_ini: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('turmas');
  }
};