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
const sequelize_1 = require("sequelize");
const FreeAPIMealsSequelize_1 = __importDefault(require("../database/models/FreeAPIMealsSequelize"));
class MealsModel {
    constructor() {
        this.model = FreeAPIMealsSequelize_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll();
            return response;
        });
    }
    findByName(search) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: { meal_name: { [sequelize_1.Op.like]: `%${search}%` } }
            });
            if (!response)
                return null;
            return response;
        });
    }
    findByLetter(search) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: { meal_name: { [sequelize_1.Op.like]: `${search}%` } }
            });
            if (!response)
                return null;
            return response;
        });
    }
    findByIngredient(search) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll({
                where: {
                    [sequelize_1.Op.or]: [
                        { meal_ingredient_01: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_02: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_03: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_04: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_05: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_06: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_07: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_08: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_09: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_10: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_11: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_12: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_13: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_14: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_15: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_16: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_17: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_18: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_19: { [sequelize_1.Op.like]: `%${search}%` } },
                        { meal_ingredient_20: { [sequelize_1.Op.like]: `%${search}%` } },
                    ],
                }
            });
            if (!response)
                return null;
            return response;
        });
    }
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map