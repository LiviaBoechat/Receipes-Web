import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMeals } from '../../interfaces/IMeals';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMeals>>('meals', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      meal_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meal_category: {
        type: DataTypes.STRING,
      },
      meal_area: {
        type: DataTypes.STRING,
      },
      meal_instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      meal_image: {
        type: DataTypes.STRING,
      },
      meal_tag: {
        type: DataTypes.STRING,
      },
      meal_video: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meal_ingredient_01: {
        type: DataTypes.STRING,
      },
      meal_ingredient_02: {
        type: DataTypes.STRING,
      },
      meal_ingredient_03: {
        type: DataTypes.STRING,
      },
      meal_ingredient_04: {
        type: DataTypes.STRING,
      },
      meal_ingredient_05: {
        type: DataTypes.STRING,
      },
      meal_ingredient_06: {
        type: DataTypes.STRING,
      },
      meal_ingredient_07: {
        type: DataTypes.STRING,
      },
      meal_ingredient_08: {
        type: DataTypes.STRING,
      },
      meal_ingredient_09: {
        type: DataTypes.STRING,
      },
      meal_ingredient_10: {
        type: DataTypes.STRING,
      },
      meal_ingredient_11: {
        type: DataTypes.STRING,
      },
      meal_ingredient_12: {
        type: DataTypes.STRING,
      },
      meal_ingredient_13: {
        type: DataTypes.STRING,
      },
      meal_ingredient_14: {
        type: DataTypes.STRING,
      },
      meal_ingredient_15: {
        type: DataTypes.STRING,
      },
      meal_ingredient_16: {
        type: DataTypes.STRING,
      },
      meal_ingredient_17: {
        type: DataTypes.STRING,
      },
      meal_ingredient_18: {
        type: DataTypes.STRING,
      },
      meal_ingredient_19: {
        type: DataTypes.STRING,
      },
      meal_ingredient_20: {
        type: DataTypes.STRING,
      },
      meal_measure_01: {
        type: DataTypes.STRING,
      },
      meal_measure_02: {
        type: DataTypes.STRING,
      },
      meal_measure_03: {
        type: DataTypes.STRING,
      },
      meal_measure_04: {
        type: DataTypes.STRING,
      },
      meal_measure_05: {
        type: DataTypes.STRING,
      },
      meal_measure_06: {
        type: DataTypes.STRING,
      },
      meal_measure_07: {
        type: DataTypes.STRING,
      },
      meal_measure_08: {
        type: DataTypes.STRING,
      },
      meal_measure_09: {
        type: DataTypes.STRING,
      },
      meal_measure_10: {
        type: DataTypes.STRING,
      },
      meal_measure_11: {
        type: DataTypes.STRING,
      },
      meal_measure_12: {
        type: DataTypes.STRING,
      },
      meal_measure_13: {
        type: DataTypes.STRING,
      },
      meal_measure_14: {
        type: DataTypes.STRING,
      },
      meal_measure_15: {
        type: DataTypes.STRING,
      },
      meal_measure_16: {
        type: DataTypes.STRING,
      },
      meal_measure_17: {
        type: DataTypes.STRING,
      },
      meal_measure_18: {
        type: DataTypes.STRING,
      },
      meal_measure_19: {
        type: DataTypes.STRING,
      },
      meal_measure_20: {
        type: DataTypes.STRING,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};