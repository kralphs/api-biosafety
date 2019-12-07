"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
process.env.NODE_ENV !== "prod" && app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Define routes
app.use('/api/v1', router_1.default);
app.use('/', (req, res) => res.send('Hello world!!!'));
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));
exports.default = app;
//# sourceMappingURL=server.js.map