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
const DrinksService_1 = __importDefault(require("../service/DrinksService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class DrinksController {
    constructor() { this.service = new DrinksService_1.default(); }
    getDrinks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = req.query;
            const { status, data } = yield this.service.getDrinks(search);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
}
exports.default = DrinksController;
//# sourceMappingURL=DrinksController.js.map