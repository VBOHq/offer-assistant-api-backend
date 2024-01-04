// ./app/models/project.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const User = require('../../user/models/index.model');

const Project = sequelize.define('Project', {
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  project_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_description: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  project_status: {
    type: DataTypes.ENUM,
    values: ['In Progress', 'Completed', 'Archived'],
    allowNull: false,
    defaultValue: 'In Progress',
  },
  best: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  challenger: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  cliche: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  competitor: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  fear: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  mvs: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  philosopher: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  power: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  pub: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  story: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  stretch: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  sub: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  valuemine: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  weird: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  why: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
});


Project.sync(); // Synchronize the model with the database

module.exports = Project;
