"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 8080; // default port to listen
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const client = mongoose_1.default.connection;
client.on('error', console.error.bind(console, 'connection error:'));
client.once('open', function () {
    server_1.default.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
});
//# sourceMappingURL=app.js.map