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
const UsersService_1 = __importDefault(require("../service/UsersService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const UserDto_1 = __importDefault(require("./UserDto"));
class UsersControllers {
    constructor() { this.service = new UsersService_1.default(); }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('aqui');
            const body = UserDto_1.default.BodyToUser(req.body);
            const adminEmailRegex = /@admin\.com$/i;
            body.role = adminEmailRegex.test(body.email) ? 'ADMIN' : 'USER';
            const { status, data } = yield this.service.register(body);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (req.body);
            const { status, data } = yield this.service.login(user);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, data } = yield this.service.getAllUsers();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        });
    }
}
exports.default = UsersControllers;
//# sourceMappingURL=UsersController.js.map