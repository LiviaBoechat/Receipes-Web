import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class Meals extends Model<
    InferAttributes<Meals>,
    InferCreationAttributes<Meals>
  > {
    declare id: CreationOptional<number>;
    declare meal_name: string;
    declare meal_category: string;
    declare meal_area: string;
    declare meal_instructions: Text;
    declare meal_image: string;
    declare meal_tag: string;
    declare meal_video: string;
    declare meal_ingredient_01: string;
    declare meal_ingredient_02: string;
    declare meal_ingredient_03: string;
    declare meal_ingredient_04: string;
    declare meal_ingredient_05: string;
    declare meal_ingredient_06: string;
    declare meal_ingredient_07: string;
    declare meal_ingredient_08: string;
    declare meal_ingredient_09: string;
    declare meal_ingredient_10: string;
    declare meal_ingredient_11: string;
    declare meal_ingredient_12: string;
    declare meal_ingredient_13: string;
    declare meal_ingredient_14: string;
    declare meal_ingredient_15: string;
    declare meal_ingredient_16: string;
    declare meal_ingredient_17: string;
    declare meal_ingredient_18: string;
    declare meal_ingredient_19: string;
    declare meal_ingredient_20: string;
    declare meal_measure_01: string;
    declare meal_measure_02: string;
    declare meal_measure_03: string;
    declare meal_measure_04: string;
    declare meal_measure_05: string;
    declare meal_measure_06: string;
    declare meal_measure_07: string;
    declare meal_measure_08: string;
    declare meal_measure_09: string;
    declare meal_measure_10: string;
    declare meal_measure_11: string;
    declare meal_measure_12: string;
    declare meal_measure_13: string;
    declare meal_measure_14: string;
    declare meal_measure_15: string;
    declare meal_measure_16: string;
    declare meal_measure_17: string;
    declare meal_measure_18: string;
    declare meal_measure_19: string;
    declare meal_measure_20: string;
  }
  
  Meals.init(
    {
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
    },
    {
      sequelize: db,
      modelName: 'meals',
      timestamps: false,
      underscored: true,
    }
  );
  
export default Meals;
 