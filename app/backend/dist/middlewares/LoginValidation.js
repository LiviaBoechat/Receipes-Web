"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginValidation {
    static validateFields(req, res, next) {
        const fields = req.body;
        if (!fields.email || !fields.password || !fields.username) {
            return res.status(400).json({ message: 'All fields must be filled' });
        }
        next();
    }
}
exports.default = LoginValidation;
//# sourceMappingURL=LoginValidation.js.map