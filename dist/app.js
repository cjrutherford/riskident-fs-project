"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cors = require("cors");
const express_graphql = require("express-graphql");
const resolver_1 = require("./resolver");
const graph_1 = require("./graph");
const log_1 = require("./log");
const port = parseInt(process.env.PORT) || 3200;
const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.set('port', port);
// console.log(__dirname);
app.use('/', express.static(path.join(__dirname, 'client')));
app.use(cors(corsOptions));
app.use((req, res, next) => {
    if (req.body)
        log_1.default.debug(req.body);
    if (req.params)
        log_1.default.debug(req.params);
    if (req.query)
        log_1.default.debug(req.query);
    log_1.default.debug(`Got a ${req.method} request from ${req.ip} for ${req.url}`);
    next();
});
app.use('/graphql', express_graphql({
    schema: graph_1.default,
    rootValue: resolver_1.default,
    graphiql: true
}));
exports.default = app;
//# sourceMappingURL=app.js.map