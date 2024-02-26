"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoritesDto {
    static BodyToFavorites(body, id) {
        return {
            user_id: id,
            meal_id: body === null || body === void 0 ? void 0 : body.mealId,
            drink_id: body === null || body === void 0 ? void 0 : body.drinkId
        };
    }
}
exports.default = FavoritesDto;
//# sourceMappingURL=FavoritesDto.js.map