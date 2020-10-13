import { EntityRepository } from "@mikro-orm/core";
import { Swimmer } from "../entities";

export class SwimmerRepository extends EntityRepository<Swimmer> { }