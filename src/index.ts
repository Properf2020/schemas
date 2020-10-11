import { BaseEntity, EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';
import { BaseStats, Bill, Club, ClubRole, CourseFormated, CourseRaw, Group, Note, StatsClub, StatsCountry, StatsDepartment, StatsRegion, Swimmer, SwimmerMarge, SwimmerNote, SwimmerRecord, User, UserPreference } from './entities';
import { ClubRepository } from './repositories';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const { MongoHighlighter } = require('@mikro-orm/mongo-highlighter');

export const DI = {} as {
    orm: MikroORM,
    em: EntityManager
};

const createConnection = async () => {
    DI.orm = await MikroORM.init({
        entities: [User, Bill, Club, ClubRole, CourseFormated, CourseRaw, Group,
            Note, StatsClub, StatsCountry, StatsDepartment, StatsRegion, SwimmerMarge, Swimmer, SwimmerNote, SwimmerRecord, UserPreference, BaseEntity, BaseStats],
        type: 'mongo',
        dbName: 'properf',
        highlighter: new MongoHighlighter(),
        clientUrl: 'mongodb://srv1.poneyhost.eu:27017',
        debug: true,
        metadataProvider: TsMorphMetadataProvider
    });
    DI.em = DI.orm.em;


    /*const raw = new CourseRaw();

    raw.course = "Nage Libre";
    raw.distance = "50";
    raw.nom = "CHALONS";
    raw.prenom = "Guillaume";
    raw.city = "PARIS";
    raw.club = "MEETINCLASS";
    raw.date = "qsdqsd";
    raw.dateNaissance = "2000";
    raw.saison = "2020";
    raw.tailleBassin = "100";

    await DI.orm.em.persistAndFlush([raw]);*/

    return DI;
};

module.exports = createConnection;
