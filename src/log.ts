import * as bunyan from 'bunyan';

import * as bFormat from 'bunyan-format';

const formatOut = new bFormat({outputMode: "long"});

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

export default log;