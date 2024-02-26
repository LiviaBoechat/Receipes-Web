"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinksRouter_1 = __importDefault(require("./DrinksRouter"));
const MealsRouter_1 = __importDefault(require("./MealsRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const Favorites_1 = __importDefault(require("./Favorites"));
const router = (0, express_1.Router)();
router.use('/drinks', DrinksRouter_1.default);
router.use('/meals', MealsRouter_1.default);
router.use('/auth', UserRouter_1.default);
router.use('/favorites', Favorites_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map