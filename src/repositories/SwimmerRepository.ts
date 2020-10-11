import { EntityRepository } from "mikro-orm";
import { Swimmer } from "../entities";

export class SwimmerRepository extends EntityRepository<Swimmer> {}