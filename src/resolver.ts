import * as transactions from './transactions.json';

import { Transaction, GeoInfo, ConnectionInfo } from './transaction';

import log from './log';

class GetTransaction {
    id: String;
    confidence: Number;
}

function isInt(n: any): Boolean {
    return n % 1 === 0;
}

const checkConfidence = (n: Number): Number => {
    if (isInt(n)) {
        return 1
    } else {
        return n;
    }
}

const getTransaction = (args: any): any => {
    const { id, confidence } = args;
    // const finalConfidence = checkConfidence(confidence);
    const trx = transactions.filter(t => t.id === id)[0];
    log.debug(trx);
    return trx;
}

const transactionList = (args: any): any => {
    return transactions;
}

const getTransactions = (args: any): any => {
    const { parentID, confidence } = args;
    log.debug(parentID);
    log.debug(confidence);
    const debugSet: any[] = [];
    const trx = transactions.filter(t => {
        log.info(t.id);
        log.info(parentID);
        log.info(t.id === parentID);
        return t.id === parentID
    })[0]
    trx.childrens = trx.childrens.filter(c => {
        const filterDebug = { 
            targetConfidence: c.connectionInfo.confidence,
            sourceConfidence: confidence,
            comparison: c.connectionInfo.confidence <= confidence,
        };
        log.debug(filterDebug);
        debugSet.push(filterDebug);
        return c.connectionInfo.confidence <= confidence;
    });
    log.debug(debugSet);
    log.debug(trx);
    return trx;
}

const resolver = {
    transaction: getTransaction,
    transactions: getTransactions,
    transactionList,
};

export default resolver;