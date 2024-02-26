"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('users', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            role: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    },
};
//# sourceMappingURL=UserMigration.js.map