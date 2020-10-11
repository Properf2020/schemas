import { EntityRepository } from "mikro-orm";
import { StatsClub, StatsCountry } from "../entities";

export class StatsCountryRepository extends EntityRepository<StatsCountry> {}