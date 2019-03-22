"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactions = require("./transactions.json");
const log_1 = require("./log");
class GetTransaction {
}
function isInt(n) {
    return n % 1 === 0;
}
const checkConfidence = (n) => {
    if (isInt(n)) {
        return 1;
    }
    else {
        return n;
    }
};
const getTransaction = (args) => {
    const { id, confidence } = args;
    // const finalConfidence = checkConfidence(confidence);
    const trx = transactions.filter(t => t.id === id)[0];
    log_1.default.debug(trx);
    return trx;
};
const transactionList = (args) => {
    return transactions;
};
const getTransactions = (args) => {
    const { parentID, confidence } = args;
    log_1.default.debug(parentID);
    log_1.default.debug(confidence);
    const debugSet = [];
    const trx = transactions.filter(t => {
        log_1.default.info(t.id);
        log_1.default.info(parentID);
        log_1.default.info(t.id === parentID);
        return t.id === parentID;
    })[0];
    trx.childrens = trx.childrens.filter(c => {
        const filterDebug = {
            targetConfidence: c.connectionInfo.confidence,
            sourceConfidence: confidence,
            comparison: c.connectionInfo.confidence <= confidence,
        };
        log_1.default.debug(filterDebug);
        debugSet.push(filterDebug);
        return c.connectionInfo.confidence <= confidence;
    });
    log_1.default.debug(debugSet);
    log_1.default.debug(trx);
    return trx;
};
const resolver = {
    transaction: getTransaction,
    transactions: getTransactions,
    transactionList,
};
exports.default = resolver;
//# sourceMappingURL=resolver.js.map