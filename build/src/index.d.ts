import { EntityManager, MikroORM } from '@mikro-orm/core';
export declare class DI {
    orm: MikroORM;
    em: EntityManager;
    constructor(orm: MikroORM);
}
export interface DBConfig {
    mongoName: string;
    mongoHost: string;
}
export declare function createConnection(config: DBConfig): Promise<DI>;
