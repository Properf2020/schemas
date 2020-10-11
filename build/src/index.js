"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DI = void 0;
const core_1 = require("@mikro-orm/core");
const entities_1 = require("./entities");
const reflection_1 = require("@mikro-orm/reflection");
const { MongoHighlighter } = require('@mikro-orm/mongo-highlighter');
exports.DI = {};
const createConnection = async () => {
    exports.DI.orm = await core_1.MikroORM.init({
        entities: [entities_1.User, entities_1.Bill, entities_1.Club, entities_1.ClubRole, entities_1.CourseFormated, entities_1.CourseRaw, entities_1.Group,
            entities_1.Note, entities_1.StatsClub, entities_1.StatsCountry, entities_1.StatsDepartment, entities_1.StatsRegion, entities_1.SwimmerMarge, entities_1.Swimmer, entities_1.SwimmerNote, entities_1.SwimmerRecord, entities_1.UserPreference, core_1.BaseEntity, entities_1.BaseStats],
        type: 'mongo',
        dbName: 'properf',
        highlighter: new MongoHighlighter(),
        clientUrl: 'mongodb://srv1.poneyhost.eu:27017',
        debug: true,
        metadataProvider: reflection_1.TsMorphMetadataProvider
    });
    exports.DI.em = exports.DI.orm.em;
    return exports.DI;
};
module.exports = createConnection;
