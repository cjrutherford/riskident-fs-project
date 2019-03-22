"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
const bFormat = require("bunyan-format");
const formatOut = new bFormat({ outputMode: "long" });
const log = bunyan.createLogger({
    name: 'Riskident-FullStack-Example',
    streams: [
        {
            type: 'rotating-file',
            path: 'backend.log',
            period: '1w',
            count: 3,
        },
        {
            stream: formatOut
        }
    ],
    serializers: bunyan.stdSerializers,
    level: 'debug'
});
exports.default = log;
//# sourceMappingURL=log.js.map