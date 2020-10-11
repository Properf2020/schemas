import { Entity } from "mikro-orm";
import { BaseStats } from ".";
import { StatsCountryRepository } from "../repositories/StatsCountryRepository";

@Entity({ customRepository: () => StatsCountryRepository})
export class StatsCountry extends BaseStats {}