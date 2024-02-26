"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Favorites_1 = __importDefault(require("../database/models/Favorites"));
const FreeAPIMealsSequelize_1 = __importDefault(require("../database/models/FreeAPIMealsSequelize"));
const FreeAPIDrinksSequelize_1 = __importDefault(require("../database/models/FreeAPIDrinksSequelize"));
class UsersModel {
    constructor() {
        this.model = Favorites_1.default;
    }
    favorite(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.create({
                user_id: ids.user_id,
                meal_id: ids === null || ids === void 0 ? void 0 : ids.meal_id,
                drink_id: ids === null || ids === void 0 ? void 0 : ids.drink_id,
            });
            return response;
        });
    }
    getAllFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
                include: [
                    { model: FreeAPIMealsSequelize_1.default, as: 'meal' },
                    { model: FreeAPIDrinksSequelize_1.default, as: 'drink' }
                ]
            });
            return response;
        });
    }
    getAllMealsFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
                include: [{ model: FreeAPIMealsSequelize_1.default, as: 'meal' }]
            });
            return response;
        });
    }
    getAllDrinksFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
                include: [{ model: FreeAPIDrinksSequelize_1.default, as: 'drink' }]
            });
            return response;
        });
    }
    unfavorite(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const whereConditions = { user_id: ids.user_id };
            if (ids.meal_id !== undefined) {
                whereConditions.meal_id = ids.meal_id;
            }
            else if (ids.drink_id !== undefined) {
                whereConditions.drink_id = ids.drink_id;
            }
            const response = yield this.model.destroy({
                where: whereConditions,
            });
            return response;
        });
    }
    getAllFavoritesIds(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({ where: { user_id: id } });
            return response;
        });
    }
}
exports.default = UsersModel;
//# sourceMappingURL=FavoritesModel.js.map