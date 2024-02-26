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
const UsersModel_1 = __importDefault(require("../model/UsersModel"));
const JWTutils_1 = __importDefault(require("../utils/JWTutils"));
const PasswordValidation_1 = __importDefault(require("../utils/PasswordValidation"));
const UserDto_1 = __importDefault(require("../controller/UserDto"));
class UsersService {
    constructor(model = new UsersModel_1.default()) {
        this.model = model;
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checkUser = yield this.getUsers(user);
                if (checkUser.status === 'SUCCESS') {
                    return { status: 'CONFLICT', data: 'User already exists' };
                }
                const response = yield this.model.createUser(user);
                const treatedResponse = UserDto_1.default.UserToBody(response);
                return { status: 'SUCCESS', data: treatedResponse };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findUser = (yield this.model.findByEmail(user)) || (yield this.model.findByName(user));
                if (findUser) {
                    const passwordValidation = PasswordValidation_1.default.validatePassword(user, findUser);
                    const tokenGenerated = JWTutils_1.default.sign({ id: findUser.id });
                    if (passwordValidation)
                        return { status: 'SUCCESS', data: tokenGenerated };
                }
                return { status: 'NOT_FOUND', data: 'Invalid email or password' };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.getAllUsers();
                return { status: 'SUCCESS', data: response };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getUsers(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.username !== null) {
                    const response = yield this.model.findByName(user);
                    if (response)
                        return { status: 'SUCCESS', data: response };
                }
                if (user.email !== null) {
                    const response = yield this.model.findByEmail(user);
                    if (response)
                        return { status: 'SUCCESS', data: response };
                }
                return { status: 'NOT_FOUND', data: 'Not Found' };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
}
exports.default = UsersService;
//# sourceMappingURL=UsersService.js.map