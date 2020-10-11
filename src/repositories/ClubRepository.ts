import { EntityRepository } from "mikro-orm";
import { Club } from "../entities";

export class ClubRepository extends EntityRepository<Club> {}