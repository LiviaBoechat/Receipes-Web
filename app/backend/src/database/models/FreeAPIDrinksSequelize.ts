import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class Drinks extends Model<
    InferAttributes<Drinks>,
    InferCreationAttributes<Drinks>
  > {
    declare id: CreationOptional<number>;
    declare drink_name: string;
    declare drink_tag: string;
    declare drink_video: string;
    declare drink_category: string;
    declare alcoholic: string;
    declare drink_glass: string;
    declare drink_instructions: Text;
    declare drink_image: string;
    declare drink_ingredient_01: string;
    declare drink_ingredient_02: string;
    declare drink_ingredient_03: string;
    declare drink_ingredient_04: string;
    declare drink_ingredient_05: string;
    declare drink_ingredient_06: string;
    declare drink_ingredient_07: string;
    declare drink_ingredient_08: string;
    declare drink_ingredient_09: string;
    declare drink_ingredient_10: string;
    declare drink_ingredient_11: string;
    declare drink_ingredient_12: string;
    declare drink_ingredient_13: string;
    declare drink_ingredient_14: string;
    declare drink_ingredient_15: string;
    declare drink_ingredient_16: string;
    declare drink_ingredient_17: string;
    declare drink_ingredient_18: string;
    declare drink_ingredient_19: string;
    declare drink_ingredient_20: string;
    declare drink_measure_01: string;
    declare drink_measure_02: string;
    declare drink_measure_03: string;
    declare drink_measure_04: string;
    declare drink_measure_05: string;
    declare drink_measure_06: string;
    declare drink_measure_07: string;
    declare drink_measure_08: string;
    declare drink_measure_09: string;
    declare drink_measure_10: string;
    declare drink_measure_11: string;
    declare drink_measure_12: string;
    declare drink_measure_13: string;
    declare drink_measure_14: string;
    declare drink_measure_15: string;
    declare drink_measure_16: string;
    declare drink_measure_17: string;
    declare drink_measure_18: string;
    declare drink_measure_19: string;
    declare drink_measure_20: string;
  }
  
  Drinks.init(
    {
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
    },
    {
      sequelize: db,
      modelName: 'drinks',
      timestamps: false,
      underscored: true,
    }
  );
  
export default Drinks;
 