import {buildSchema} from 'graphql';

const schema = buildSchema(`
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

export default schema;
