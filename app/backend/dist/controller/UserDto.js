"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDto {
    static BodyToUser(body) {
        return {
            email: body.email,
            password: body.password,
            username: body.username,
            role: body.role
        };
    }
    static UserToBody(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
        };
    }
}
exports.default = UserDto;
//# sourceMappingURL=UserDto.js.map