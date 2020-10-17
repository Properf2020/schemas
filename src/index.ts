import { EntityManager, MikroORM } from '@mikro-orm/core';
import { BaseEntity, BaseStats, Bill, Club, CourseFormated, CourseRaw, Group, StatsClub, StatsCountry, StatsDepartment, StatsRegion, Swimmer, User, ClubRaw } from './entities';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { UserPreference, ClubRole, Note, SwimmerMarge, SwimmerRecord, StatByAge, StatsByCategory, StatByNote, CourseInfo } from './objects/index';

export class DI {
    orm: MikroORM;
    em: EntityManager;

    constructor(orm: MikroORM) {
        this.orm = orm;
        this.em = orm.em;
    }
}

export interface DBConfig {
    mongoName: string;
    mongoHost: string;
}

export async function createConnection(config: DBConfig): Promise<DI> {
    return new DI(await MikroORM.init({
        entities: [User, Bill, Club, CourseFormated, CourseRaw, Group, StatsClub, StatsCountry, StatsDepartment, StatsRegion, Swimmer, ClubRole, Note, SwimmerMarge, SwimmerRecord, UserPreference, ClubRaw, StatByAge, StatsByCategory, StatByNote, CourseInfo, BaseStats, BaseEntity],
        type: 'mongo',
        dbName: config.mongoName,
        highlighter: new MongoHighlighter(),
        clientUrl: config.mongoHost,
        debug: true,
        metadataProvider: TsMorphMetadataProvider
    }));
};