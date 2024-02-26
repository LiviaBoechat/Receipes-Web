"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const User_1 = __importDefault(require("./User"));
const FreeAPIMealsSequelize_1 = __importDefault(require("./FreeAPIMealsSequelize"));
const FreeAPIDrinksSequelize_1 = __importDefault(require("./FreeAPIDrinksSequelize"));
class Favorites extends sequelize_1.Model {
}
Favorites.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    meal_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    drink_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    sequelize: _1.default,
    modelName: 'favorites',
    timestamps: false,
    underscored: true,
});
Favorites.belongsTo(User_1.default, { foreignKey: 'user_id', as: 'user' });
Favorites.belongsTo(FreeAPIMealsSequelize_1.default, { foreignKey: 'meal_id', as: 'meal' });
Favorites.belongsTo(FreeAPIDrinksSequelize_1.default, { foreignKey: 'drink_id', as: 'drink' });
exports.default = Favorites;
//# sourceMappingURL=Favorites.js.map