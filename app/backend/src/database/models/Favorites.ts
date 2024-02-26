import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
import User from './User';
import FreeAPIMealsSequelize from './FreeAPIMealsSequelize';
import FreeAPIDrinksSequelize from './FreeAPIDrinksSequelize';

  class Favorites extends Model<
    InferAttributes<any>,
    InferCreationAttributes<any>
    > {
        declare id: CreationOptional<number>;
        declare user_id: number;
        declare meal_id: number;
        declare drink_id: number;
    }

  Favorites.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      drink_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize: db,
      modelName: 'favorites',
      timestamps: false,
      underscored: true,
    }
  );
  
  Favorites.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  Favorites.belongsTo(FreeAPIMealsSequelize, { foreignKey: 'meal_id', as: 'meal' });
  Favorites.belongsTo(FreeAPIDrinksSequelize, { foreignKey: 'drink_id', as: 'drink' });

export default Favorites;
 