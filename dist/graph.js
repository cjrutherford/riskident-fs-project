"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = graphql_1.buildSchema(`
    type Query{
        transactionList(id: String): [Transaction]
        transaction(id: String!, confidence: Float):Transaction
        transactions(parentID: String!, confidence: Float): Transaction
    }

    type Transaction{
        id: String
        index: Int
        age: Int
        name: String
        email: String,
        phone: String
        connectionInfo: ConnectionInfo
        geoInfo: GeoInfo
        childrens: [Transaction]
    }

    type ConnectionInfo{
        type: String
        confidence: Float
    }

    type GeoInfo{
        latitude: Float
        longitude: Float
    }
`);
exports.default = schema;
//# sourceMappingURL=graph.js.map