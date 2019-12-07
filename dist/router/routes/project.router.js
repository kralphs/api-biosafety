"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_model_1 = __importDefault(require("../../models/project.model"));
const router = express_1.Router();
router
    .route('/')
    .get((req, res) => {
    const { query } = req;
    project_model_1.default.find(query, (err, projects) => {
        if (err) {
            return res.send(err);
        }
        return res.json(projects);
    });
})
    .post((req, res) => {
    res.send('Added New Project');
});
router
    .route('/:id')
    .get((req, res) => {
    project_model_1.default.findById(req.params.id, (err, project) => {
        if (err) {
            return res.send(err);
        }
        return res.json(project);
    });
});
exports.default = router;
//# sourceMappingURL=project.router.js.map