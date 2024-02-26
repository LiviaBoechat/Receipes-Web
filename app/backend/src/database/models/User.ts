import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
  > {
    declare id: CreationOptional<number>;
    declare email: string;
    declare password: string;
    declare username: string;
    declare role: string;
  }
  
  User.init(
    {
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
      },
    },
    {
      sequelize: db,
      modelName: 'users',
      timestamps: false,
      underscored: true,
    }
  );
  
export default User;
 