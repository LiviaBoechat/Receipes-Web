"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterValidation {
    static validateFields(req, res, next) {
        const fields = req.body;
        if (!fields.email || !fields.password || !fields.username) {
            return res.status(400).json({ message: 'All fields must be filled' });
        }
        next();
    }
    static validateEmail(req, res, next) {
        const fields = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailCheck = emailRegex.test(fields.email);
        if (emailCheck === false) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        next();
    }
    static validateUsername(req, res, next) {
        const fields = req.body;
        if (fields.username.length < 4 || fields.username.length > 20) {
            return res.status(400).json({ message: 'Invalid username' });
        }
        next();
    }
    static validatePassword(req, res, next) {
        const fields = req.body;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*0-9])(?=.{6,15}$).*/;
        const passwordCheck = passwordRegex.test(fields.password);
        if (passwordCheck === false) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        next();
    }
}
exports.default = RegisterValidation;
//# sourceMappingURL=RegisterValidation.js.map