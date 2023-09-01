const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        field: 'name'
      },
      firstname: {
        type: DataTypes.STRING,
        field: 'firstname'
      },
      phone: {
        type: DataTypes.STRING,
        field: 'phone'
      },
      email: {
        type: DataTypes.STRING,
        field: 'email'
      },
      address: {
        type: DataTypes.STRING,
        field: 'address'
      },
      postalZip: {
        type: DataTypes.STRING,
        field: 'postalZip'
      },
      city: {
        type: DataTypes.STRING,
        field: 'city'
      },
      company: {
        type: DataTypes.STRING,
        field: 'company'
      },
      password: {
        type: DataTypes.STRING,
        field: 'password'
      },
      token: {
        type: DataTypes.STRING,
        field: 'token'
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        field: 'isAdmin'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};