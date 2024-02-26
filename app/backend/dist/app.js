"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./router/index"));
const supabaseClient_1 = __importDefault(require("./config/supabaseClient"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.use(express_1.default.json());
        this.routes();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
    }
    routes() { this.app.use(index_1.default); }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
        console.log(supabaseClient_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map