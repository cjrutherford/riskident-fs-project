export class Transaction{
    id: String;
    index: Number;
    age: Number;
    name: String;
    email: String;
    phone: String;
    connectionInfo: ConnectionInfo;
    geoInfo: GeoInfo;
    childrens: [Transaction];
}

export class GeoInfo{
    latitude: Number;
    longitude: Number;
}

export class ConnectionInfo{
    type: String;
    confidence: Number;
}