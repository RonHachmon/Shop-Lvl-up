// module.exports = {
//   up: (queryInterface, Sequelize) => queryInterface.createTable('shop-MTA', {
//     id: {
//       type: Sequelize.UUID,
//       defaultValue: Sequelize.UUIDV4,
//       primaryKey: true,
//     },
//     title: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     created_at: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//     updated_at: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//     deleted_at: {
//       allowNull: true,
//       type: Sequelize.DATE,
//     },
//   }),
//   down: queryInterface => queryInterface.dropTable('shop-MTA'),
// };
