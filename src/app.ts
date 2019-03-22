import express = require('express');
import {Request, Response, NextFunction} from 'express';
import * as path from 'path';
import * as fs from 'fs';

import * as cors from 'cors';

import * as express_graphql from 'express-graphql';
import resolver from './resolver';
import schema from './graph';

import log from './log';

const port: Number = parseInt(process.env.PORT) || 3200;

const app = express();

const corsOptions: cors.CorsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.set('port', port);
// console.log(__dirname);
app.use('/', express.static(path.join(__dirname,'client')));

app.use(cors(corsOptions));

app.use((req: Request, res: Response, next: NextFunction) => {
    if(req.body) log.debug(req.body);
    if(req.params) log.debug(req.params);
    if(req.query) log.debug(req.query);
    log.debug(`Got a ${req.method} request from ${req.ip} for ${req.url}`);
    next();
});

app.use('/graphql', express_graphql({
    schema,
    rootValue: resolver,
    graphiql: true
}));

export default app;