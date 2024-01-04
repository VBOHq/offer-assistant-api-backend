const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Blueprint = sequelize.define('blueprint', {
  blueprint_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  blueprint_name: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '',
  },
  blueprint_slug: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '',
  },
  blueprint_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

// Blueprint.beforeSync(async (options) => {
//   // Check if the model has already been synchronized
//   const isAlreadySynced = await Blueprint.synced;
  
//   // If the model is not already synchronized, insert default data
//   if (!isAlreadySynced) {
//     const defaultBlueprint = [
//       {
//         blueprint_name: 'Best',
//         blueprint_slug: 'Best',
//         blueprint_description: 'This is the Best blueprint.',
//       },
//       {
//         blueprint_name: 'challenger',
//         blueprint_slug: 'challenger',
//         blueprint_description: 'This is the challenger blueprint.',
//       },
//       {
//         blueprint_name: 'cliche',
//         blueprint_slug: 'cliche',
//         blueprint_description: 'This is the cliche blueprint.',
//       },
//       {
//         blueprint_name: 'competitor',
//         blueprint_slug: 'competitor',
//         blueprint_description: 'This is the competitor blueprint.',
//       },
//       {
//         blueprint_name: 'fear',
//         blueprint_slug: 'fear',
//         blueprint_description: 'This is the fear blueprint.',
//       },
//       {
//         blueprint_name: 'mvs',
//         blueprint_slug: 'mvs',
//         blueprint_description: 'This is the mvs blueprint.',
//       },
//       {
//         blueprint_name: 'philosopher',
//         blueprint_slug: 'philosopher',
//         blueprint_description: 'This is the philosopher blueprint.',
//       },
//       {
//         blueprint_name: 'power',
//         blueprint_slug: 'power',
//         blueprint_description: 'This is the power blueprint.',
//       },
//       {
//         blueprint_name: 'pub',
//         blueprint_slug: 'pub',
//         blueprint_description: 'This is the pub blueprint.',
//       },
//       {
//         blueprint_name: 'story',
//         blueprint_slug: 'story',
//         blueprint_description: 'This is the story blueprint.',
//       },
//       {
//         blueprint_name: 'stretch',
//         blueprint_slug: 'stretch',
//         blueprint_description: 'This is the stretch blueprint.',
//       },
//       {
//         blueprint_name: 'sub',
//         blueprint_slug: 'sub',
//         blueprint_description: 'This is the sub blueprint.',
//       },
//       {
//         blueprint_name: 'valuemine',
//         blueprint_slug: 'valuemine',
//         blueprint_description: 'This is the valuemine blueprint.',
//       },
//       {
//         blueprint_name: 'weird',
//         blueprint_slug: 'weird',
//         blueprint_description: 'This is the weird blueprint.',
//       },
//       {
//         blueprint_name: 'why',
//         blueprint_slug: 'why',
//         blueprint_description: 'This is the why blueprint.',
//       }
//     ];

//     await Blueprint.bulkCreate(defaultBlueprint);

//     // Mark the model as synchronized to avoid inserting default data again
//     Blueprint.synced = true;
//   }
// });

Blueprint.sync();

module.exports = Blueprint;
