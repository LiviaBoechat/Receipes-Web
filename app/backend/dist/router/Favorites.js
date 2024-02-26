"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FavoritesController_1 = __importDefault(require("../controller/FavoritesController"));
const router = (0, express_1.Router)();
const controller = new FavoritesController_1.default();
router.patch('/:id', 
// TokenValidation.validateToken,
(req, res) => controller.favorite(req, res));
router.get('/:id', 
// TokenValidation.validateToken,
(req, res) => controller.getAllFavorites(req, res));
router.get('/:id/meals', 
// TokenValidation.validateToken,
(req, res) => controller.getAllMealsFavorites(req, res));
router.get('/:id/drinks', 
// TokenValidation.validateToken,
(req, res) => controller.getAllDrinksFavorites(req, res));
router.delete('/:id', 
// TokenValidation.validateToken,
(req, res) => controller.unfavorite(req, res));
exports.default = router;
//# sourceMappingURL=Favorites.js.map