"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteChecker {
    static checkFavorite(db, meal_id, drink_id) {
        return db.some(item => item.meal_id === meal_id || item.drink_id === drink_id);
    }
}
exports.default = FavoriteChecker;
//# sourceMappingURL=FavoriteChecker.js.map