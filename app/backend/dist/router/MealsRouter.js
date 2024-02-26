"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealsController_1 = __importDefault(require("../controller/MealsController"));
const controller = new MealsController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => controller.getMeals(req, res));
exports.default = router;
//# sourceMappingURL=MealsRouter.js.map