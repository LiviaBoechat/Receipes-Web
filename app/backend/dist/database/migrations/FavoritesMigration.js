"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('favorites', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            meal_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            drink_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('favorites');
    },
};
//# sourceMappingURL=FavoritesMigration.js.map