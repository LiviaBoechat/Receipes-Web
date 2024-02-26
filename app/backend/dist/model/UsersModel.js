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
const User_1 = __importDefault(require("../database/models/User"));
const supabaseClient_1 = __importDefault(require("../config/supabaseClient"));
class UsersModel {
    constructor() {
        this.model = User_1.default;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield supabaseClient_1.default
                .from('users')
                .insert([{
                    email: user.email,
                    username: user.username,
                    password: user.password,
                    role: user.role
                }]);
            return response;
        });
    }
    // public async createUser(user: IUsers)
    // : Promise<IUsers> {
    //   const response = await this.model.create({
    //     email: user.email,
    //     password: user.password,
    //     username: user.username,
    //     role: user.role,
    //   });
    //   return response;
    // }
    findByName(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findOne({ where: { username: user.username } });
            return response;
        });
    }
    findByEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findOne({ where: { email: user.email } });
            return response;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findAll();
            return response;
        });
    }
}
exports.default = UsersModel;
//# sourceMappingURL=UsersModel.js.map