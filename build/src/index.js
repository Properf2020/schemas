"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.DI = void 0;
const core_1 = require("@mikro-orm/core");
const entities_1 = require("./entities");
const reflection_1 = require("@mikro-orm/reflection");
const mongo_highlighter_1 = require("@mikro-orm/mongo-highlighter");
const index_1 = require("./objects/index");
class DI {
    constructor(orm) {
        this.orm = orm;
        this.em = orm.em;
    }
}
exports.DI = DI;
async function createConnection(config) {
    return new DI(await core_1.MikroORM.init({
        entities: [entities_1.User, entities_1.Bill, entities_1.Club, entities_1.CourseFormated, entities_1.CourseRaw, entities_1.Group, entities_1.StatsClub, entities_1.StatsCountry, entities_1.StatsDepartment, entities_1.StatsRegion, entities_1.Swimmer, index_1.ClubRole, index_1.Note, index_1.SwimmerMarge, index_1.SwimmerRecord, index_1.UserPreference, entities_1.BaseStats, entities_1.BaseEntity],
        type: 'mongo',
        dbName: config.mongoName,
        highlighter: new mongo_highlighter_1.MongoHighlighter(),
        clientUrl: config.mongoHost,
        debug: true,
        metadataProvider: reflection_1.TsMorphMetadataProvider
    }));
}
exports.createConnection = createConnection;
;
