"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWTutils_1 = __importDefault(require("../utils/JWTutils"));
class TokenValidation {
    static validateToken(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
        try {
            const decoded = JWTutils_1.default.verify(token);
            res.locals.user = { id: decoded.id };
            next();
        }
        catch (e) {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
    }
}
exports.default = TokenValidation;
//# sourceMappingURL=TokenValidation.js.map