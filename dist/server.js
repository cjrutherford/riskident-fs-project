"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const log_1 = require("./log");
const server = app_1.default.listen(app_1.default.get('port'), (err) => {
    if (err)
        log_1.default.error(err);
    log_1.default.info(`server is listening for requests. Open: http://localhost:${app_1.default.get('port')}/graphql`);
});
exports.default = server;
//# sourceMappingURL=server.js.map