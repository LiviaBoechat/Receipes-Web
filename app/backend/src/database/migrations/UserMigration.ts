import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUsers } from '../../interfaces/User/IUsers';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUsers>>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};
