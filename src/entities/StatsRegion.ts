import { Entity } from "mikro-orm";
import { BaseStats } from ".";
import { StatsRegionRepository } from "../repositories/StatsRegionRepository";

@Entity({ customRepository: () => StatsRegionRepository})
export class StatsRegion extends BaseStats {}