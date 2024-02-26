"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            drink_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drink_tag: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_video: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_category: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            alcoholic: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_glass: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_instructions: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            drink_image: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_01: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_02: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_03: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_04: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_05: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_06: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_07: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_08: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_09: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_10: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_11: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_12: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_13: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_14: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_15: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_16: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_17: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_18: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_19: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_ingredient_20: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_01: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_02: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_03: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_04: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_05: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_06: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_07: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_08: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_09: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_10: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_11: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_12: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_13: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_14: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_15: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_16: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_17: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_18: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_19: {
                type: sequelize_1.DataTypes.STRING,
            },
            drink_measure_20: {
                type: sequelize_1.DataTypes.STRING,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('drinks');
    },
};
//# sourceMappingURL=FreeAPIDrinksMigration.js.map