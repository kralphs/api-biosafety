"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_router_1 = __importDefault(require("./routes/project.router"));
const router = express_1.Router();
router
    .get('/', (req, res) => {
    res.send('API Base - Schema goes here');
});
router.use("/projects", project_router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map