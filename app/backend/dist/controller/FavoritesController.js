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
const FavoritesService_1 = __importDefault(require("../service/FavoritesService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const FavoritesDto_1 = __importDefault(require("./FavoritesDto"));
class FavoritesControllers {
    constructor() { this.service = new FavoritesService_1.default(); }
    favorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = FavoritesDto_1.default.BodyToFavorites(req.body, +req.params.id);
            const { status, data } = yield this.service.favorite(ids);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    getAllFavorites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (+req.params.id);
            const { status, data } = yield this.service.getAllFavorites(id);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    getAllMealsFavorites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (+req.params.id);
            const { status, data } = yield this.service.getAllMealsFavorites(id);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    getAllDrinksFavorites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (+req.params.id);
            const { status, data } = yield this.service.getAllDrinksFavorites(id);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    unfavorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = FavoritesDto_1.default.BodyToFavorites(req.body, +req.params.id);
            const { status, data } = yield this.service.unfavorite(ids);
            return res.status((0, mapStatusHTTP_1.default)(status)).json({ data });
        });
    }
}
exports.default = FavoritesControllers;
//# sourceMappingURL=FavoritesController.js.map