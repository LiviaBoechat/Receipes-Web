"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Meals extends sequelize_1.Model {
}
Meals.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    meal_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meal_category: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_area: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_instructions: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    meal_image: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_tag: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_video: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meal_ingredient_01: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_02: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_03: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_04: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_05: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_06: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_07: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_08: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_09: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_10: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_11: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_12: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_13: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_14: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_15: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_16: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_17: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_18: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_19: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_ingredient_20: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_01: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_02: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_03: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_04: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_05: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_06: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_07: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_08: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_09: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_10: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_11: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_12: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_13: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_14: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_15: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_16: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_17: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_18: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_19: {
        type: sequelize_1.DataTypes.STRING,
    },
    meal_measure_20: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'meals',
    timestamps: false,
    underscored: true,
});
exports.default = Meals;
//# sourceMappingURL=FreeAPIMealsSequelize.js.map