const { DataTypes } = require('sequelize');
const db = require('../config/db');

const model = db.define('unidade', {
// Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  endereco: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sede_regional: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  nivel: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  data_abertura: { 
    type: DataTypes.DATEONLY,
    allowNull: false
  },
   email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
   telefone: {
    type: DataTypes.STRING(50),
    allowNull: false
  }

}, {
    tableName: 'unidade',
});

// Cria a tabela no banco de dados, caso ainda não exista
model.sync()

module.exports = model