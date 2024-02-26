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
const FavoritesModel_1 = __importDefault(require("../model/FavoritesModel"));
const FavoriteChecker_1 = __importDefault(require("../utils/FavoriteChecker"));
class FavoritesService {
    constructor(model = new FavoritesModel_1.default()) {
        this.model = model;
    }
    favorite(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllFavoritesIds = yield this.model.getAllFavoritesIds(ids.user_id);
                Promise.all(getAllFavoritesIds);
                const isFavorite = FavoriteChecker_1.default.checkFavorite(getAllFavoritesIds, ids.meal_id, ids.drink_id);
                if (isFavorite) {
                    yield this.model.unfavorite(ids);
                    return { status: 'SUCCESS', data: 'Desfavoritado' };
                }
                if (ids.drink_id) {
                    const response = yield this.model.favorite(ids);
                    return { status: 'SUCCESS', data: response };
                }
                if (ids.meal_id) {
                    const response = yield this.model.favorite(ids);
                    return { status: 'SUCCESS', data: response };
                }
                return { status: 'NOT_FOUND', data: 'Meal or Drink Not Found' };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getAllFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.getAllFavorites(id);
                if (response !== null)
                    return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: `You don't have favorites` };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getAllMealsFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.getAllMealsFavorites(id);
                if (response !== null)
                    return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: `You don't have Meals favorites` };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getAllDrinksFavorites(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.getAllDrinksFavorites(id);
                if (response !== null)
                    return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: `You don't have Drinks favorites` };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    unfavorite(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.unfavorite(ids);
                if (response !== null)
                    return { status: 'SUCCESS', data: `Favorite deleted` };
                return { status: 'NOT_FOUND', data: `Favorite not found` };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
}
exports.default = FavoritesService;
//# sourceMappingURL=FavoritesService.js.map