import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDrinks } from '../../interfaces/IDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrinks>>('drinks', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      drink_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drink_tag: {
        type: DataTypes.STRING,
      },
      drink_video: {
        type: DataTypes.STRING,
      },
      drink_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alcoholic: {
        type: DataTypes.STRING,
      },
      drink_glass: {
        type: DataTypes.STRING,
      },
      drink_instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      drink_image: {
        type: DataTypes.STRING,
      },
      drink_ingredient_01: {
        type: DataTypes.STRING,
      },
      drink_ingredient_02: {
        type: DataTypes.STRING,
      },
      drink_ingredient_03: {
        type: DataTypes.STRING,
      },
      drink_ingredient_04: {
        type: DataTypes.STRING,
      },
      drink_ingredient_05: {
        type: DataTypes.STRING,
      },
      drink_ingredient_06: {
        type: DataTypes.STRING,
      },
      drink_ingredient_07: {
        type: DataTypes.STRING,
      },
      drink_ingredient_08: {
        type: DataTypes.STRING,
      },
      drink_ingredient_09: {
        type: DataTypes.STRING,
      },
      drink_ingredient_10: {
        type: DataTypes.STRING,
      },
      drink_ingredient_11: {
        type: DataTypes.STRING,
      },
      drink_ingredient_12: {
        type: DataTypes.STRING,
      },
      drink_ingredient_13: {
        type: DataTypes.STRING,
      },
      drink_ingredient_14: {
        type: DataTypes.STRING,
      },
      drink_ingredient_15: {
        type: DataTypes.STRING,
      },
      drink_ingredient_16: {
        type: DataTypes.STRING,
      },
      drink_ingredient_17: {
        type: DataTypes.STRING,
      },
      drink_ingredient_18: {
        type: DataTypes.STRING,
      },
      drink_ingredient_19: {
        type: DataTypes.STRING,
      },
      drink_ingredient_20: {
        type: DataTypes.STRING,
      },
      drink_measure_01: {
        type: DataTypes.STRING,
      },
      drink_measure_02: {
        type: DataTypes.STRING,
      },
      drink_measure_03: {
        type: DataTypes.STRING,
      },
      drink_measure_04: {
        type: DataTypes.STRING,
      },
      drink_measure_05: {
        type: DataTypes.STRING,
      },
      drink_measure_06: {
        type: DataTypes.STRING,
      },
      drink_measure_07: {
        type: DataTypes.STRING,
      },
      drink_measure_08: {
        type: DataTypes.STRING,
      },
      drink_measure_09: {
        type: DataTypes.STRING,
      },
      drink_measure_10: {
        type: DataTypes.STRING,
      },
      drink_measure_11: {
        type: DataTypes.STRING,
      },
      drink_measure_12: {
        type: DataTypes.STRING,
      },
      drink_measure_13: {
        type: DataTypes.STRING,
      },
      drink_measure_14: {
        type: DataTypes.STRING,
      },
      drink_measure_15: {
        type: DataTypes.STRING,
      },
      drink_measure_16: {
        type: DataTypes.STRING,
      },
      drink_measure_17: {
        type: DataTypes.STRING,
      },
      drink_measure_18: {
        type: DataTypes.STRING,
      },
      drink_measure_19: {
        type: DataTypes.STRING,
      },
      drink_measure_20: {
        type: DataTypes.STRING,
      },
        });
    },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks');
  },
};