import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFavorites } from '../../interfaces/IFavorites';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavorites>>('favorites', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      drink_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('favorites');
  },
};
