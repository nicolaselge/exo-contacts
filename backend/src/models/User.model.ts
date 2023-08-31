import { DataTypes, Model, Sequelize } from 'sequelize';
const sequelize = new Sequelize('mariadb::memory');

export class User extends Model {
    getAll() {
        return User.findAll();
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING
    },
    postalZip: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.STRING
    },
    company: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'User'
});