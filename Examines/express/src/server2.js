"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
function logging(req, res, next) {
    var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    var method = req.method;
    var path = req.path;
    var timestamp = new Date().toISOString();
    console.log("".concat(timestamp, " ").concat(ip, " ").concat(method, " ").concat(path));
    next();
}
function authorized(req, res, next) {
    var query = req.query;
    if (query.token && query.token === "authorized") {
        next();
        return;
    }
    res.status(403).send("you are not authorized to access this location");
}
app.use(logging);
app.get('/', function (req, res) {
    res.send('Hello from Express');
});
app.use(authorized);
app.get('/secured', function (req, res) {
    res.send('This is a secured endpoint');
});
app.listen(port, function () {
    console.log("Server is up and running on http://127.0.0.1:".concat(port));
});
