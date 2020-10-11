import { Entity } from "mikro-orm";
import { BaseStats } from ".";
import { StatsClubRepository } from "../repositories/StatsClubRepository";

@Entity({ customRepository: () => StatsClubRepository})
export class StatsClub extends BaseStats {}