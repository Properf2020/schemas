"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_highlighter_1 = require("@mikro-orm/mongo-highlighter");
const options = {
    type: 'mongo',
    dbName: 'test',
    highlighter: new mongo_highlighter_1.MongoHighlighter(),
    clientUrl: 'mongodb://srv1.poneyhost.eu:27017',
    debug: true,
};
exports.default = options;
